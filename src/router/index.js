import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Feature from '@/components/Feature'
import Security from '@/components/Security'
import About from '@/components/About'
import Help from '@/components/Help'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: {name: 'home'}},
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/feature',
            name: 'feature',
            component: Feature
        },
        {
            path: '/security',
            name: 'security',
            component: Security
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/help/:tab',
            name: 'help',
            component: Help
        },
        {path: '/help', redirect: '/help/1'}
    ]
});
