import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Content from '../views/Content.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Demo'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Demo'
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Demo'
    },
  },
  {
    path: '/content',
    name: 'Content',
    component: Content,
    meta: {
      title: 'Demo'
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      title: 'Demo'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
