<template>
  <div>
    <md-card :md-elevation="1" md-with-hover class="diadikasia-card" style="margin-left: 0;">
      <md-ripple>
          <a :href="diadikasia.href" target="_blank" :id="diadikasia.slug">
          <md-card-header>
            <div class="md-title" :style="diadikasia.href !== '' ? '' : 'color: black;'">
              {{ diadikasia.title }}
            </div>
          </md-card-header>
          </a>
        </md-ripple>

        <md-card-actions>

          <md-button @click="openSharingDialog()">Μοιρασου</md-button>
          <md-button class="md-icon-button" @click="openSharingDialog()">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
    </md-card>

    <SocialShareDialog :title="diadikasia.title" :url="getSharingUrl()" :trigger="triggerDialog"/>
  </div>
</template>

<script>
import config from '~/data/config.json'
import SocialShareDialog from './SocialShareDialog.vue'

export default {
  name: 'EklogikiCard',
  components: {
    SocialShareDialog
  },
  props: ['diadikasia'],
  data () {
    return {
      triggerDialog: false
    }
  },
  methods: {
    getSharingUrl() {
      const base = config.baseUrl
      const url = `${base}/eklogikes-diadikasies#${this.diadikasia.slug}`
      return url
    },
    openSharingDialog() {
      this.triggerDialog = !this.triggerDialog
    }
  }
}
</script>

<style scoped>
.diadikasia-card {
  margin: 0 12px 12px 12px;
}

.md-card-header {
  margin: 0;
  padding-bottom: 0;
  padding-top: 2px;
}

.md-title {
  margin-top: 0;
  font-size: 20px;
}

.md-card-actions {
  padding-top: 0;
  padding-bottom: 0;
}
</style>