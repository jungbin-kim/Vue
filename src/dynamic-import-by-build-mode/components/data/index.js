// build 조건에 따라 다른 모듈을 가져와 mixin
export const getDummyVueComponent = mode => {
  let result = "";
  switch (mode) {
    case "PROJECT2": {
      result = require("./Dummy.Project2.vue");
      break;
    }
    default: {
      result = require("./Dummy.Default.vue");
      break;
    }
  }
  return result.default;
};

export const getDummyJs = mode => {
  let result = "";
  switch (mode) {
    case "PROJECT2": {
      result = require("./Dummy.Project2.js");
      break;
    }
    default: {
      result = require("./Dummy.Default.js");
      break;
    }
  }
  return result.default;
};
