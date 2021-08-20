import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

createApp(App).use(store).use(router).use(PrimeVue).use(ToastService).component('InputText', InputText).component('Toast', Toast).component('Button', Button).component("font-awesome-icon", FontAwesomeIcon).mount('#app')