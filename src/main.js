import Vue from 'vue'
import App from './app.vue'
import router from './router'
//引入饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
