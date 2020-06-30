<template>
  <Layout :title="title">
    <img src="/banner_promo.jpg"/><br /><br />
    <ProtaseisContainer />
    <div class="anchor-pad-bot"/>
  </Layout>
</template>

<script>
import ProtaseisContainer from '~/components/ProtaseisContainer.vue'

export default {
  name: 'Protaseis',
  components: {
    ProtaseisContainer
  },
  data () {
    return {
      title: '12 Προτάσεις για μια Ομοσπονδία συμμετοχής και ανάπτυξης'
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

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 5px;
}
</style>