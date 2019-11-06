<template>
  <md-card :md-elevation="1" md-with-hover :class="collapsed ? 'smallflex' : 'bigflex'" :id="protasi.id">
        <md-card-header>
          <div class="md-title">{{ protasi.title }}</div>
        </md-card-header>

        <md-card-content :class="collapsed ? 'collapsed' : 'uncollapsed'">
          <ul>
            <li v-for="item in protasi.items" :key="typeof(item) === 'object' ? item.display : item">
              
              <SimpleExpandable v-if="typeof(item) === 'object'" :title="item.display" :slugs="item.urls.map(x => x.slug)">
                <div v-for="url in item.urls" :key="url.title">
                  <a :href="url.href" target="_blank" style="display: inline-block;">
                    {{ url.title }}
                  </a>

                  <UrlShareButton :title="url.title" :url="getSharingUrl(url.slug)"/>
                </div>
              </SimpleExpandable>

              <div v-else>{{ item }}</div>
            </li>
          </ul>

        <p style="margin-left: 24px; margin-top: 12px; line-height: 48px;">Κατάθεση προτάσεων ή προβλημάτων <md-button class="md-raised md-accent" :href="feedbackFormUrl" target="_blank"> εδω</md-button></p>
        </md-card-content>
        
        <md-card-actions>
          <md-button :class="(!collapsed ? '' : 'md-primary')" @click="toggleCollapsed"> {{ collapsed ? 'Περισσοτερα' : 'Λιγοτερα'}}</md-button>
          <md-button :class="'md-icon-button ' + (!collapsed ? '' : 'md-primary')" @click="toggleCollapsed">
            <md-icon>{{ collapsed ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</md-icon>
          </md-button>

          <md-button @click="openSharingDialog()">Μοιρασου</md-button>
          <md-button class="md-icon-button" @click="openSharingDialog()">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>

      <!-- Dialog -->
      <SocialShareDialog :url="getSharingUrl(this.protasi.id)" :title="protasi.title" :trigger="triggerDialog"/>

  </md-card>
</template>

<script>
import config from '~/data/config.json'
import SimpleExpandable from './SimpleExpandable.vue'
import SocialShareDialog from './SocialShareDialog.vue'
import UrlShareButton from './UrlShareButton.vue'

export default {
  name: 'ProtasiCard',
  props: ['protasi'],
  components: {
    SimpleExpandable,
    SocialShareDialog,
    UrlShareButton
  },
  data () {
    return {
      collapsed: true,
      triggerDialog: false,
      feedbackFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc9oE-wt_siyXiV6lmuTllL5nPfWui8nvI7c_sdZC2EroxfLw/viewform?fbclid=IwAR1HR893dnk9MU2r7pGShAgh271Mo9B_lcjdcSNT2ofiEgUl1NksNjeaDTQ'
    }
  },
  mounted () {
    const hash = document.location.hash.slice(1)
    const allContainedChildSlugs = this.protasi.items
      .filter(item => typeof(item) === 'object').map(expandable => expandable.urls)
      .flat(1).map(url => url.slug)
    
    allContainedChildSlugs.push(this.protasi.id)
    if (hash && allContainedChildSlugs.includes(hash)) {
      this.collapsed = false
    }
  },
  methods: {
    getSharingUrl: function (slug) {
      const base = config.baseUrl
      const url = `${base}/protaseis#${slug}`
      return url
    },
    toggleCollapsed: function () {
      this.collapsed = !this.collapsed

      if (!this.collapsed) {
        this.showLocationHash()
      }
    },
    openDialog: function () {
      this.triggerDialog = !this.triggerDialog
    },
    openSharingDialog: function () {
      this.showLocationHash()
      this.openDialog()
    },
    showLocationHash: function () {
      document.location.hash = this.protasi.id
    },
  }
}
</script>

<style>
.main-content {
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul {
  margin: 0;
}
.md-card {
  margin: 0;
}
.md-card-header {
  padding: 4px 16px 0px 16px;
}
.md-title {
  font-size: 18px;
}
.collapsed {
  max-height: 90px;
  overflow: hidden;
}

.uncollapsed {
  max-height: 9999px;
}

.smallflex {
  /* flex: 1 0 41%; */
  flex: 2 0 100%;
}

.bigflex {
  flex: 2 0 100%;
}

.md-list-item-content {
  padding: 0;
  margin: 0;
}

.md-list-item-content > div {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
}
</style>