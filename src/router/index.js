import Router from 'vue-router';
import Vue from 'vue';
import Register from '@/views/register/register.vue'
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
import Center from '@/views/center/center.vue'

Vue.use(Router);

const router = new Router({

    routes: [
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
              title: '注册'
            }
        },
        {
          path: '/login',
          name: 'login',
          component: Login,
          meta: {
            title: '登录'
          }
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
              title: '首页'
            }
        },
        {
            path: '/center',
            name: 'center',
            component: Center,
            meta: {
              title: '个人中心'
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  });
export default router;
