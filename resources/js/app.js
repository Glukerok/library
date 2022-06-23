import './bootstrap';
import 'bootstrap/dist/js/bootstrap';

import App from './App.vue';
import { createApp } from 'vue';
import router from './system/router';

createApp(App)
    .use(router)
    .mount('#app');
