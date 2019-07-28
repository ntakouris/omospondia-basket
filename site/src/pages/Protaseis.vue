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
        // {
        //   key: 'description',
        //   name: 'description',
        //   content: this.description(this.$page.post)
        // },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        //{ property: 'og:description', content: this.description(this.$page.post) },
        //{ property: 'og:url', content: this.postUrl },
        //{ property: 'article:published_time', content: moment(this.$page.post.date).format('YYYY-MM-DD') },
        //{ property: 'og:image', content: this.ogImageUrl },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: this.title },
        //{ name: 'twitter:description', content: this.description(this.$page.post) },
        { name: 'twitter:site', content: '@v_ntakouris' },
        { name: 'twitter:creator', content: '@v_ntakouris' }
        //{ name: 'twitter:image', content: this.ogImageUrl },
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