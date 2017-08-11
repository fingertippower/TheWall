import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/register.vue'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Personal from '../components/personal.vue'
import School from '../components/school.vue'
import ConcernConcern from '../components/concern-concern.vue'
import ConcernFans from '../components/concern-fans.vue'
import Collect from '../components/collect.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Index
        },
        {
            path: '/index',
            component: Index
        },
        {
            path:'/personal',
            component:Personal
        },
        {
            path:'/school',
            component:School
        },
        {
            path:'/concern-concern',
            component:ConcernConcern
        },
        {
            path:'/concern-fans',
            component:ConcernFans
        },
        {
            path:'/collect',
            name:'collect',
            component:Collect
        }
    ]
})