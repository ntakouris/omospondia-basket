<template>
  <Layout :title="title">   
    <img src="/banner_promo.jpg"/><br /><br />

    <ProtaseisContainer />
  </Layout>
</template>

<script>
import ProtaseisContainer from '~/components/ProtaseisContainer.vue'

export default {
  name: 'Index',
  components: {
    ProtaseisContainer
  },
  data () {
    return {
      title: 'Για μια ομοσπονδία συμμετοχής και ανάπτυξης με διαφάνεια'
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


<style>
</style>
