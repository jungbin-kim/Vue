# vue-conditional-mixin
Vue Component 내에서 One source multi-use를 하기 위해서는 빌드 환경 별로 다른 데이터를 가져야할 때가 있다. 처음 생각한 방법은 아래와 같이 분기가 필요한 부분에 빌드 환경 조건을 사용하는 것이다.
```js
data() {
  return {
    list: [
        process.env.VUE_APP_MODE === 'PROJECT2' ? {
          text: "item1 - Projec2",
          innerList: [
            { text: "1-1 Apple1" }
          ]
        } : {
          text: "item1",
          innerList: [
            { text: "1-1 Apple1" }
          ]
        }
      ]
  }
}
```
하지만, 
- Vue Component의 `data` 프로퍼티 내 구조가 복잡하고 (여러군데 `process.env.VUE_APP_MODE === 'PROJECT2'` 이런 조건이 들어가야한다...)
- 빌드 환경에 따라 많은 데이터가 달라질 때 (PROJECT2 환경에만 존재하는 데이터가 있다거나)
- 여러 빌드 환경을 적용해야할 때 (위의 예는 두가지 빌드 환경)

오히려 가독성과 편의성이 떨어지는 것 같았다.

그래서 이럴 경우에는 이러한 데이터들을 차라리 다른 파일로 관리하는게 좋을 것 같았고 아래와 같이 2가지 방법을 생각했다. 
 
1. **Vue mixin 이용**: 해당 Component 내부에서 빌드 환경 조건 별로 다른 Vue Component를 mixin 한다. mixin은 Vue Component에 대한 것이기 때문에 빌드별 데이터 차이 외에도 다른 부분(method, 생명주기 등)에서 차이가 있을 경우에 유리하다. 
   - [HelloWorld 파일](./src/components/HelloWorld.vue)에서 [HelloWorld.Default.vue](./src/components/data/HelloWorld.Default.vue)와 [HelloWorld.Project2.vue](./src/components/data/HelloWorld.Project2.vue)를 빌드 조건별로 다르게 로딩한다.

2. **Vue Props 이용(Dependency Injection)**: 외부 데이터 객체를 해당 Component props에 빌드 환경에 따라 다른 객체로 넣는다. 주입받는 Component에서 사용하여야할 내부 조건 등이 있으면 상위 객체인 App.vue에서 접근하기 힘듬으로 1번으로 고려해야한다. 
   - [App.vue 파일](./src/App.vue)에서 `<HelloWorld2 :msg="msg" :list="list" />`와 같이 빌드 환경에 따라 다르게 import한 데이터를 HelloWorld Component에 props로 넘긴다. (코드 상에서 주석처리함)

## Project setup
```sh
$ npm install
```

### Compiles and hot-reloads
```sh
# Serve Default Project
$ npm run serve
# Or Server Project2
$ npm run serve-project2
```
