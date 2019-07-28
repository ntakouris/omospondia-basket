<template>
  <md-card :md-elevation="1" md-with-hover :class="collapsed ? 'smallflex' : 'bigflex'" :id="protasi.id">
        <md-card-header>
          <div class="md-title">{{ protasi.title }}</div>
        </md-card-header>

        <md-card-content :class="collapsed ? 'collapsed' : 'uncollapsed'">
          <ul>
            <li v-for="item in protasi.items" :key="item">{{ item }}</li>
          </ul>

        <p style="margin-left: 24px; margin-top: 12px; line-height: 48px;">Κατάθεση προτάσεων, προβλημάτων και καταγγελιών<md-button class="md-raised md-accent"> εδω</md-button></p>
        </md-card-content>
        
        <md-card-actions>
          <md-button :class="(!collapsed ? '' : 'md-primary')" @click="toggleCollapsed"> {{ collapsed ? 'Περισσοτερα' : 'Λιγοτερα'}}</md-button>
          <md-button :class="'md-icon-button ' + (!collapsed ? '' : 'md-primary')" @click="toggleCollapsed">
            <md-icon>{{ collapsed ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</md-icon>
          </md-button>

          <md-button @click="openSharingDialog()"> Μοιρασου</md-button>
          <md-button class="md-icon-button" @click="openSharingDialog()">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>

      <!-- Dialog -->
    <md-dialog :md-active.sync="showDialog">
    <social-sharing :url="getSharingLink()"
                          :title="protasi.title"
                          :description="protasi.items[0]"
                          hashtags="basket,basketgr,omospondia"
                          twitter-user="v_ntakouris"
                          inline-template
                          style="display: flex; justify-content: space-between;">
      <div>
      <network network="facebook">
        <img class="social" src="/facebook.png" />
      </network>

      <network network="linkedin">
        <img class="social" src="/linkedin.png" />
      </network>

      <network network="twitter">
        <img class="social" src="/twitter.png" />
      </network>
      </div>
    </social-sharing>

      <md-dialog-actions>
        <md-button class="md-accent" @click="copyToClipboard(getSharingLink())">Αντιγραφη συνδεσμου</md-button>
        <md-button @click="showDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
  </md-card>
</template>

<script>
export default {
  name: 'ProtasiCard',
  props: ['protasi'],
  data () {
    return {
      collapsed: true,
      showDialog: false,
    }
  },
  mounted () {
    const hash = document.location.hash.slice(1)
    if (hash && hash === this.protasi.id) {
      this.collapsed = false
    }
  },
  methods: {
    getSharingLink: function () {
      document.location.hash = this.protasi.id
      const link = document.location.href
      document.location.hash = ''
      return link
    },
    toggleCollapsed: function () {
      this.collapsed = !this.collapsed

      if (!this.collapsed) {
        this.showLocationHash()
      }
    },
    openSharingDialog: function () {
      this.showDialog = true
      this.showLocationHash()
    },
    showLocationHash: function () {
      document.location.hash = this.protasi.id
    },
    copyToClipboard: function (text) {
      // Create an element with position -9999 px, focus it's content, copy the content, remove it
      const el = document.createElement('textarea')
      el.value = text
      el.setAttribute('readonly', '')
      el.style = {
        position: 'absolute',
        left: '-9999px'
      }
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}
</script>

<style>
.social {
  width: 48px;
  height: 48px;
  margin: 8px;
}
.social:hover {
  cursor: pointer;
}
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
</style>