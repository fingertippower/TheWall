import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/register.vue'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Personal from '../components/personal.vue'
import School from '../components/school.vue'
import Collect from '../components/collect.vue'
import IndexPersonalMsg from '../components/index-personal-msg.vue'
import IndexPen from '../components/index-pen.vue'
import Talk from '../components/index-talk.vue'
import Schoolfellow from '../components/schoolfellow.vue'
import IsSend from '../components/part-three/is-send.vue'
import NotLike from '../components/index-not-like.vue'
import IndexHome from '../components/index-home.vue'
import Letter from '../components/letter.vue'
import LetterPut from '../components/letter-put.vue'
import LetterGet from '../components/letter-get.vue'
import LetterGetMsg from '../components/letter-get-msg.vue'
import LetterMsg from '../components/letter-msg.vue'
import WriteLetter from '../components/writeLetter.vue'
import PersonalInformation from '../components/personalInformation.vue'
import SystemMsg from '../components/systemMsg.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    //routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    },

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
            component: IndexHome
        },
        {
            path: '/index',
            component: Index,
            children:[{
                path: 'index-home',
                component:IndexHome,
                meta: {
                    title: 'home',
                    keepAlive: true
                },
                children:[{
                    path:'index-personal-msg',
                    component:IndexPersonalMsg
                },{
                    path:'index-not-like',
                    component:NotLike
                },{
                    path:'personal',
                    component:Personal
                }]
            },{
                path: 'letter',
                component:Letter,
                children:[{
                    path: '/',
                    component:LetterPut
                },{
                    path: 'letter-put',
                    component:LetterPut,
                    children:[{
                        path:'personal',
                        component:Personal
                    }]
                },{
                    path: 'letter-get',
                    component:LetterGet,
                    children:[{
                        path:'personal',
                        component:Personal
                    },{
                        path: 'letter-get-msg',
                        component:LetterGetMsg
                    }]
                },{
                    path:'personal',
                    component:Personal
                }]
            }]
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
            path:'/schoolfellow',
            component:Schoolfellow,
        },
        {
            path:'/letter-msg',
            component:LetterMsg
        },
        {
            path:'/write-letter',
            component:WriteLetter
        },
        {
            path:'/personalInformation',
            component:PersonalInformation
        },
        {
            path:'/systemMsg',
            component:SystemMsg
        }
    ]
})