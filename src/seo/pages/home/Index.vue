<template>
  <div>
    <h2>HOME {{ baseCountryUpper }}</h2>
  </div>
</template>

<script>
export default {
  // 아래와 같이 metaInfo를 선언하면 this로 접근해서 수정 가능. 동적일 때 사용.
  metaInfo() {
    return {
      title: `HOME ${this.baseCountryUpper}`
    };
  }
};
</script>
