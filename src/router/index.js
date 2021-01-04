import Vue from 'vue';
import VueRouter from 'vue-router';
//官方的元件
import Home from '@/components/HelloWorld'
//自訂元件
Vue.use(VueRouter)
//啟用元件
export default new VueRouter({ //匯出到 main.js
    routes:[ //路由設定
        {
            name: '首頁',//元件呈現名稱
            path: '/index',// 元件路徑
            component: Home,//對應的元件
        },
    ]
});