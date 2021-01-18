// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueAxios, axios);
Vue.component('Loading',Loading);//全域方式啟動
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);
  if(to.meta.requiredAuth){
    console.log('需要驗證');
    var api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
        console.log(response.data);
        if(response.data.success){
          next();
        }
        else{
          next(
            {
              path:'/login',
            }
          );
        }
    });
  }
  else{
    next();
  }
})