import { createApp } from 'vue';
import App from './App.vue';
import yzhButton from './components/button.vue';
import yzhDialog from './components/dialog.vue';
import yzhInput from './components/input.vue';
import yzhSwitch from './components/switch.vue';
import yzhRadio from './components/radio.vue';
import yzhRadioGroup from './components/radio-group.vue';
import yzhCheckBox from './components/checkbox.vue';
import yzhCheckboxGroup from './components/checkBoxGroup.vue';
import yzhForm from './components/form.vue';
import yzhFormItem from './components/form-item.vue';

import moment from 'moment';
import 'moment/locale/zh-cn';
import './assets/fonts/iconfont.css';

const app = createApp(App);

app.component('yzhButton', yzhButton);
app.component('yzhDialog', yzhDialog);
app.component('yzhInput', yzhInput);
app.component('yzhSwitch', yzhSwitch);
app.component('yzhRadio', yzhRadio);
app.component('yzhRadioGroup', yzhRadioGroup);
app.component('yzhCheckBox', yzhCheckBox);
app.component('yzhCheckboxGroup', yzhCheckboxGroup);
app.component('yzhForm', yzhForm);
app.component('yzhFormItem', yzhFormItem);
moment.locale('zh-cn');

app.mount('#app');