<template>
  <Layout :title="title">
    <EklogikiCard v-for="diadikasia in eklogikesDiadikasies" :key="diadikasia.title" :diadikasia="diadikasia"/>
    <div class="anchor-pad-bot"/>
  </Layout>
</template>

<script>
import eklogikesDiadikasies from '~/data/eklogikesDiadikasies.json'
import EklogikiCard from '~/components/EklogikiCard.vue'

export default {
  name: 'EklogikesDiadikasies',
  components: {
    EklogikiCard
  },
  data () {
    return {
      eklogikesDiadikasies,
      title: 'Εκλογικές διαδικασίες'
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

</style>