<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
    <social-sharing :url="url"
                          :title="title"
                          :description="title"
                          :quote="title"
                          hashtags="basketgr"
                          twitter-user="v_ntakouris"
                          inline-template
                          style="display: flex; justify-content: space-between;">
      <div>
      <network network="facebook">
        <img class="social" src="/facebook.png"/>
      </network>

      <network network="linkedin">
        <img class="social" src="/linkedin.png"/>
      </network>

      <network network="twitter">
        <img class="social" src="/twitter.png"/>
      </network>
      </div>
    </social-sharing>

      <md-dialog-actions>
        <md-button class="md-accent" @click="copySharingUrl()">Αντιγραφη συνδεσμου</md-button>
        <md-button @click="showDialog = false">OK</md-button>
      </md-dialog-actions>

      <!-- Copy verification snackbar -->
      <md-snackbar :md-duration="10000" :md-active.sync="showSnackbar" md-persistent>
        <span>Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.</span>
        <md-button class="md-primary" @click="showSnackbar = false">Ok</md-button>
      </md-snackbar>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'SocialShareDialog',
  props: ['title', 'url', 'trigger'],
  data() {
    return {
      showDialog: false,
      showSnackbar: false,
    }
  },
  watch: {
    trigger: function(newVal, oldVal) {
      this.showDialog = false
      this.showDialog = true
    }
  },
  methods: {
    copySharingUrl: function () {
      this.copyToClipboard(this.url)
      this.showSnackbar = true
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
</style>