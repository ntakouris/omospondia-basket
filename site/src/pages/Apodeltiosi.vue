<template>
  <Layout :title="title">   
    <section>
        <ApodeltiosiCard v-for="(a, index) in apodeltiosi" :key="a.href" :apodeltiosi="a" :largeText="index==0"/>
    </section>
    <div class="anchor-pad-bot"/>
  </Layout>
</template>

<script>
import apodeltiosi from '~/data/apodeltiosi.json'
import ApodeltiosiCard from '~/components/ApodeltiosiCard.vue'

export default {
  name: 'Apodeltiosi',
  components: {
    ApodeltiosiCard
  },
  data () {
    return {
      apodeltiosi,
      title: 'Αποδελτίωση Τύπου'
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
