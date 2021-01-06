<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  created(){
    console.log(process.env.APIPATH);
    console.log(process.env. CUSTOMPATH);
    var api = `${process.env.APIPATH}/api/${process.env. CUSTOMPATH}/products`
    this.$http.get(api).then((response) => {
      console.log(response.data)
    })
  }
}
</script>
<style lang="scss">
@import "./assets/all"
</style>
