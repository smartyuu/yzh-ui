import Vue from 'vue'
import App from './App.vue'
import yzhButton from './components/button.vue'
import yzhDialog from './components/dialog.vue'
import yzhInput from './components/input.vue'
import yzhSwitch from './components/switch.vue'
import yzhRadio from './components/radio.vue'
import yzhRadioGroup from './components/radio-group.vue'
import yzhCheckBox from './components/checkbox.vue'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.component(yzhButton.name, yzhButton)
Vue.component(yzhDialog.name, yzhDialog)
Vue.component(yzhInput.name, yzhInput)
Vue.component(yzhSwitch.name, yzhSwitch)
Vue.component(yzhRadio.name, yzhRadio)
Vue.component(yzhRadioGroup.name, yzhRadioGroup)
Vue.component(yzhCheckBox.name, yzhCheckBox)

new Vue({
  render: h => h(App),
}).$mount('#app')
