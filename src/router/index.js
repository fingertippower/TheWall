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
import IndexPersonalMsg from '../components/index-personal-msg.vue'
import IndexPen from '../components/index-pen.vue'
import Talk from '../components/index-talk.vue'
import Concern from '../components/concern.vue'
import IsSend from '../components/part-three/is-send.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/is-send',
            component:IsSend
        },
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
            component: Index,
            children:[{
                path:'index-personal-msg',
                component:IndexPersonalMsg
            }]
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
            path:'/collect',
            component:Collect
        },
        {
            path:'/index-pen',
            component:IndexPen
        },
        {
            path:'/talk',
            component:Talk
        },
        {
            path:'/concern',
            component:Concern,
            children:[{
                path: 'concern-concern',
                component: ConcernConcern
            },{
                path:'concern-fans',
                component:ConcernFans
            }]
        }
    ]
})