<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  created(){
    var api = 'https://vue-course-api.hexschool.io/api/chenghan0918/products'
    this.$http.get(api).then((response) => {
      console.log(response.data)
    })
  }
}
</script>
<style lang="scss">
@import "./assets/all"
</style>
