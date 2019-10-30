import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/page1',
      component: () => import('../pages/Page1.vue')
    },
    {
      path: '/page2',
      component: () => import('../pages/Page2.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (window.location.hash !== '') {
    // #hashWord 가 존재하는 경우, 브라우저에서 뒤로가기 후 앞으로 가기 하면 무한 로딩된다.
    // `Maximum call stack size exceeded.`
    console.log('has Hash', window.location)
    location.href = window.location.hash
  }
  console.log('before next() call')
  next()
})

router.afterEach(() => {
  // #hashWord 가 존재하는 경우, 아예 다른 페이지로 라우팅이 안된다.
  // if (window.location.hash !== '') {
  //   console.log('has Hash', window.location)
  //   location.href = window.location.hash
  // }
})

export default router
