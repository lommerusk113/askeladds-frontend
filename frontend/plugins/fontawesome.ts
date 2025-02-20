import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineNuxtPlugin } from '#app'

// Add icons to the library
library.add(faUser, faCoffee)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
