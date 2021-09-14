// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import SocialSharing from 'vue-social-sharing'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons'
  })

  head.meta.push({
    name: 'keywords',
    content: 'basket, basket12, omospondia, protaseis, ntakouris'
  })

  Vue.use(VueMaterial)
  Vue.use(SocialSharing);
    // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
