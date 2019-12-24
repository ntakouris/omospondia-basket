<template>
  <Layout :title="'Πρωτοβουλίες'">
        Προσεχώς
  </Layout>
</template>

<script>
export default {
  name: 'Protovoulies',
  data () {
    return {
      title: 'Πρωτοβουλίες'
    }
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:site', content: '@v_ntakouris' },
        { name: 'twitter:creator', content: '@v_ntakouris' }
      ]
    }
  }
}
</script>
