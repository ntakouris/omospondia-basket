<template>
  <Layout :title="title">   
    <section>
        <KataggeliaCard v-for="k in kataggelies" :key="k.href" :kataggelia="k"/>
    </section>
  </Layout>
</template>

<script>
import kataggelies from '~/data/kataggelies.json'
import KataggeliaCard from '~/components/KataggeliaCard.vue'

export default {
  name: 'Kataggelies',
  components: {
    KataggeliaCard
  },
  data () {
    return {
      kataggelies,
      title: 'Δημόσιες Καταγγελίες'
    }
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:image', content: '/diafaneia.jpg'},
        { name: 'twitter:image', content: 'https://basket12.gr/diafaneia.jpg'},
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
</style>
