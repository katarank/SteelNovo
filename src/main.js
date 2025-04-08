import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'

// Create the Vue application
const app = createApp(App)

// Use Vue Router
app.use(router)

// Use Pinia for state management
app.use(createPinia())

// Use i18n for internationalization
app.use(i18n)

// Mount the application
app.mount('#app')
