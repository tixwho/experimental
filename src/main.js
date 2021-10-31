import { createApp } from 'vue'
import App from './App.vue'

import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';

var app = createApp(App);
app.component(Button.name,Button);

app.mount('#app')
