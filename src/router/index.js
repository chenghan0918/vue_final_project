import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap' ;
//官方的元件
import Product from '@/components/Product'; 
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
//自訂元件
Vue.use(VueRouter)
//啟用元件
export default new VueRouter({ //匯出到 main.js
    routes:[ //路由設定
        {
            name: '首頁',//元件呈現名稱
            path: '/',// 元件路徑
            component: Dashboard,//對應的元件
            children: [
                {
                    name: '產品',//元件呈現名稱
                    path: 'product',// 元件路徑
                    component: Product,//
                } 
            ]
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
});