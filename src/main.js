import { createApp } from 'vue'
import App from './App.vue'
//vuetify
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
//tailwind
import "./index.css"

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
