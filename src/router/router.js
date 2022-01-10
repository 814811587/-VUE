import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import index from '../components/index.vue'
import caert from '../components/caer/caert.vue'
import caers from '../components/caer/caers.vue'
import caerf from '../components/caer/caerf.vue'
const router = new VueRouter({
    routes: [
        {
            path: '/index', 
            component: index,
            children: [
                { path: '/caert', component: caert },
                { path: '/caers', component: caers },
                { path: '/caerf', component: caerf },
            ]
        }
    ]
})

export default router