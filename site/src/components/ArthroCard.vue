<template>
  <div>
    <md-card class="md-elevation-4 diadikasia-card" style="margin-left: 0;">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ arthro.display }}</div>
          <div class="md-subhead">{{ arthro.subhead }}</div>
        </md-card-header>
      </md-ripple>

      <md-card-actions>
        <md-button :href="arthro.source" target="_blank">
          ΠΗΓΗ
          <md-icon style="margin-left: 4px;">center_focus_strong</md-icon>
        </md-button>

        <md-button :href="arthro.href">
          ΠΡΟΒΟΛΗ
          <md-icon style="margin-left: 4px;">archive</md-icon>
        </md-button>

        <md-button @click="openSharingDialog()">Μοιρασου</md-button>
        <md-button class="md-icon-button" @click="openSharingDialog()">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <SocialShareDialog :title="arthro.display" :url="getSharingUrl()" :trigger="triggerDialog" />
  </div>
</template>

<script>
import config from "~/data/config.json";
import SocialShareDialog from "./SocialShareDialog.vue";

export default {
  name: "ArthroCard",
  components: {
    SocialShareDialog
  },
  props: ["arthro"],
  data() {
    return {
      triggerDialog: false
    };
  },
  methods: {
    getSharingUrl() {
      const base = config.baseUrl;
      const url = `${base}/arthra#${this.arthro.slug}`;
      return url;
    },
    openSharingDialog() {
      this.triggerDialog = !this.triggerDialog;
    }
  }
};
</script>

<style scoped>
</style>