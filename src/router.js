import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false;


const routes = [{
        path: '/',
        name: 'Home',
        component: () => import('./components/Home'),
        children: [{
                path: 'Lunbotuliebiao',
                name: 'Lunbotuliebiao',
                component: () => import('./components/Home/Lunbotuliebiao.vue'),
            },
            {
                path: 'Lunbotu',
                name: 'Lunbotu',
                component: () => import('./components/Home/Lunbotu.vue'),
            },
            {
                path: 'Fenleiliebiao',
                name: 'Fenleiliebiao',
                component: () => import('./components/Home/Fenleiliebiao.vue')
            },
            {
                path: 'Xinjianshangping',
                name: 'Xinjianshangping',
                component: () => import('./components/Home/Xinjianshangping.vue'),
            },
            {
                path: 'Shangpinliebiao',
                name: 'Shangpinliebiao',
                component: () => import('./components/Home/Shangpinliebiao.vue')
            },
        ]
    },
    {
        path: '/Yonghu',
        name: 'Yonghu',
        component: () => import('./components/Yonghu'),
        children: [{
                path: 'Quanbudingdan',
                name: 'Quanbudingdan',
                component: () => import('./components/Yonghu/Quanbudingdan.vue'),
            },
            {
                path: 'Pinglunguanli',
                name: 'Pinglunguanli',
                component: () => import('./components/Yonghu/Pinglunguanli.vue'),
            },
            {
                path: 'Ruzhuxingxi',
                name: 'Ruzhuxingxi',
                component: () => import('./components/Yonghu/Ruzhuxingxi.vue')
            },
        ]
    },
    {
        path: '/Wode',
        name: 'Wode',
        component: () => import('./components/Wode'),
        children: [{
                path: 'Quanbupingtaishuju',
                name: 'Quanbupingtaishuju',
                component: () => import('./components/Wode/Quanbupingtaishuju.vue'),
            },
            {
                path: 'Kefuxitong',
                name: 'Kefuxitong',
                component: () => import('./components/Wode/Kefuxitong.vue')
            },
            {
                path: 'Fenxiangshezhi',
                name: 'Fenxiangshezhi',
                component: () => import('./components/Wode/Fenxiangshezhi.vue')
            },
            {
                path: 'Youhuiquanguanli',
                name: 'Youhuiquanguanli',
                component: () => import('./components/Wode/Youhuiquanguanli.vue')
            },
            {
                path: 'Youhuiquanshezhi',
                name: 'Youhuiquanshezhi',
                component: () => import('./components/Wode/Youhuiquanshezhi.vue')
            },
            {
                path: 'Tianjiawenzhang',
                name: 'Tianjiawenzhang',
                component: () => import('./components/Wode/Tianjiawenzhang.vue')
            },
            {
                path: 'Wenzhangliebiao',
                name: 'Wenzhangliebiao',
                component: () => import('./components/Wode/Wenzhangliebiao.vue')
            },
            {
                path: 'Pingtaihonghuzhucebiao',
                name: 'Pingtaihonghuzhucebiao',
                component: () => import('./components/Wode/Pingtaihonghuzhucebiao.vue')
            },
            {
                path: 'Yonghutixianbiao',
                name: 'Yonghutixianbiao',
                component: () => import('./components/Wode/Yonghutixianbiao.vue')
            },
            {
                path: 'Shujutongjifenxi',
                name: 'Shujutongjifenxi',
                component: () => import('./components/Wode/Shujutongjifenxi.vue')
            },
        ]
    },
    {
        path: '/Fenxiao',
        name: 'Fenxiao',
        component: () => import('./components/Fenxiao'),
        children: [{
                path: 'Fenxiaofenrunzidingyi',
                name: 'Fenxiaofenrunzidingyi',
                component: () => import('./components/Fenxiao/Fenxiaofenrunzidingyi.vue'),
            },
            {
                path: 'Wodetuandui',
                name: 'Wodetuandui',
                component: () => import('./components/Fenxiao/Wodetuandui.vue'),
            },
        ]
    },

    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('./components/Login')
    // },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})


export default router