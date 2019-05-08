import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const _import_ = file => () => import('views/' + file + '.vue')

/*
    login: 是否需要登陆
    同步加载路由
 */
export const constantRouterMap = [
    { 
        path: '/', 
        name: '首页', 
        meta: { page: false},
        component: _import_('Home/index')
    }
]
/**
 * 异步加载路由
 * @type {Array}
 */
export const asyncRouterMap = [

]

export const router = new Router({
    // mode: 'history',
    routes: constantRouterMap
})
