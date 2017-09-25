import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/home.vue';
import Detail from '@/page/home/detail.vue';
import Center from '@/page/userCenter/userCenter.vue';
import App from '@/App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
          path: '/home',
          component: Home,
          children:[
              {
                path:'detail/:goodId',
                name:'detail',
                meta: { requiresAuth: true },
                component: Detail
              }
          ]
        },
        //个人中心界面
        {
          path: '/center',
          component: Center
        },
      ]
    }
  ]
})
