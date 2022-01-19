import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes'
import { store } from './store'

import '@/assets/styles/main.scss';

const app = createApp(App);

app.use(routes)
app.use(store)

app.mount('#app');
