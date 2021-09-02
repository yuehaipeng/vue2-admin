import VueRouter from "vue-router";
import Vue from 'vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
          path:'/',
          component:()=>import('../views/index')
        },
        {
            path: '/openlayer-line',
            component: ()=>import('../views/examples/openlayerLine'),
        }
    ]
})
export default router;