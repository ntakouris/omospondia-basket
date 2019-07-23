// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons'
  })

  Vue.use(VueMaterial)
    // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
