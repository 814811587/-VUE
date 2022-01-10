
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

//引入全局状态
import store from './store'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
}) //兼容i18n 7.x 版本设置


// //全局守卫
// router.beforeEach((to,from,next) => {
  
//   if(to.path=="/login"){
//     //注销
//     //$cookies.remove("sid");
//     sessionStorage.removeItem('user');
//   }
//   let user=sessionStorage.getItem("user");
  
//   // if(to.path == "/login" || to.path == "/" || to.path == "/404"){
//   //   next();
//   // }else{
//   //   if(hasMenuPerm(to.meta)){
//   //     next();
//   //   }else{
//   //     next('/404');
//   //   }
//   // }
//   next();
  
// })
// 引入路由
import router from './router/router.js'
/* eslint-disable no-new */
// 挂载路由
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
