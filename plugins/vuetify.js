import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    // theme:{
    //   defaultTheme: 'dark' // добавляется темная тема
    // }
  })

  nuxtApp.vueApp.use(vuetify)
})