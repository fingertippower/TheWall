import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/register.vue'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Personal from '../components/personal.vue'
import School from '../components/school.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path:'/personal',
            name:'personal',
            component:Personal
        },
        {
            path:'/school',
            name:'school',
            component:School
        }
    ]
})