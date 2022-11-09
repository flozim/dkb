import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import { worker } from './mocks/msw'
import VueAxios from 'vue-axios'
import axios from 'axios'

void (worker.start())

const app = createApp(App)
app.use(VueAxios, axios)
app.mount('#app')
