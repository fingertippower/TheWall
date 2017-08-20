import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './vuex/store'
//引入饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
