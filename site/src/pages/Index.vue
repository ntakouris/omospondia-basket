<template>
  <Layout :title="title">   
    <section>
      
    </section>

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
        { property: 'og:image', content: '/diafaneia.jpg'},
        { name: 'twitter:image', content: 'https://basket12.gr/diafaneia.jpg'},
        { name: 'twitter:card', content: 'summary_large_image' },
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
