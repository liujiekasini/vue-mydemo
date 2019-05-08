import Vue from 'vue'
import App from './App.vue'
import router from './router/permission.js'
import store from './store'

/*样式*/
import './styles/index.css' //初始化样式
import './styles/index.less'//less样式组件

import { Cookie } from 'src/utils/storage'//cookie  session localstore工具类
Vue.prototype.Cookie = Cookie


// 全局组件
// import customComponents from './custom-components.js'
// Vue.use(customComponents)


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})