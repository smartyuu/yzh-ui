import Vue from 'vue'
import App from './App.vue'
import yzhButton from './components/button.vue'
import yzhDialog from './components/dialog.vue'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.component(yzhButton.name, yzhButton)
Vue.component(yzhDialog.name, yzhDialog)
new Vue({
  render: h => h(App),
}).$mount('#app')
