<template>
  <Layout :title="title">
    <ProtasiCard v-for="protasi in protaseis" :key="protasi.title" class="card" :protasi="protasi" />
  </Layout>
</template>

<script>
import ProtasiCard from '~/components/ProtasiCard.vue'
import protaseis from '~/data/protaseis.json'

export default {
  name: 'Protaseis',
  components: {
    ProtasiCard
  },
  data () {
    return {
      protaseis,
      title: '12 Προτάσεις για μια Ομοσπονδία συμμετοχής και ανάπτυξης'
    }
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:image', content: '/protaseis.jpg'},
        { name: 'twitter:image', content: '/protaseis.jpg'},
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