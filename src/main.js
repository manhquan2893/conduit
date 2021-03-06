import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {CHECK_AUTH} from './store/action.type'
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  store.dispatch(CHECK_AUTH).then(next)
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
