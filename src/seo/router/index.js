import Vue from "vue";
import Router from "vue-router";
import { ipService } from "../services/ipService";
import { validCountry } from "../common/country";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/:country",
      component: () => import("../pages/home/Index.vue")
    },
    {
      path: "/:country/about",
      component: () => import("../pages/about/Index.vue")
    },
    {
      path: "*",
      component: () => import("../pages/error/404.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("Access Router!");

  // check country if no country param exist
  if (validCountry(to.params.country) === false) {
    ipService.getCountry$().subscribe(
      response => {
        const countryPath = validCountry(response.countryCode)
          ? `/${response.countryCode.toLowerCase()}`
          : "/us";

        next({
          path: `${countryPath}${to.fullPath}`
        });
      },
      err => {
        // ip를 가져오는데 에러가 발생하더라도 콘텐츠가 보여야한다면 next()를 선언.
        console.error(err);
      }
    );
  } else {
    next();
  }
});

router.onReady(() => {
  console.log("Router is ready!");
});

export default router;
