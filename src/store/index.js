import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import menu from './modules/menu'
import user from './modules/user'
import app  from './modules/app' 
import proc from './modules/proc'

const store = new vuex.Store({
    modules:{
        menu,
        user,
        app,
        proc
    }
})

export default store