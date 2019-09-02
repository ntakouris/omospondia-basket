<template>
  <Layout :title="title">
    <a v-for="diadikasia in eklogikesDiadikasies" :key="diadikasia.title" :href="diadikasia.href" target="_blank" class="diadikasia-card">
    <md-card class="md-elevation-12" style="margin-left: 0;">
      <md-ripple>
          <md-card-header>
              <div class="md-title" :style="diadikasia.href !== '' ? 'color:blue;' : ''">{{ diadikasia.title }}</div>
          </md-card-header>
        </md-ripple>
    </md-card>
    </a>
  </Layout>
</template>

<script>
import eklogikesDiadikasies from '~/data/eklogikesDiadikasies.json'

export default {
  name: 'EklogikesDiadikasies',
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
.diadikasia-card {
  margin: 0 25px 25px 25px;
}
</style>