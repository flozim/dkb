import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import { worker } from './mocks/msw'

void (worker.start())

const app = createApp(App)
app.mount('#app')
