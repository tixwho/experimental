import { createApp } from 'vue';
import App from './App';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store'


const app = createApp(App).use(store).use(router);
app.use(Antd);
app.mount("#app");
