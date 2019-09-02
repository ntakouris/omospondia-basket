<template>
  <div style="display: inline-block;">
    <button @click="openDialog()">Μοιράσου <md-icon style="margin-left: 6px;">trending_up</md-icon></button>
    
    <SocialShareDialog :trigger="triggerDialog" :title="title" :url="url"/>
  </div>
</template>

<script>
import SocialShareDialog from './SocialShareDialog.vue'

export default {
  name: 'UrlShareButton',
  components: {
    SocialShareDialog
  },
  props: ['title', 'url'],
  data() {
    return {
      triggerDialog: false
    }
  },
  methods: {
    openDialog() {
      this.triggerDialog = !this.triggerDialog 
    }
  }
}
</script>

<style scoped>
button {
  border: none;
}
button:hover {
  cursor: pointer;
}
</style>