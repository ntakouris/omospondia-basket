<template>
  <div class="card">
    <md-card class="md-elevation-4 diadikasia-card" style="margin-left: 0;">
      <md-ripple>
        <md-card-header>
          <a :href="kataggelia.href" target="_blank" :id="kataggelia.slug">
            <div class="md-title">{{ kataggelia.display }}</div>
          </a>

          <div class="md-subhead">{{ kataggelia.date }}</div>
        </md-card-header>
      </md-ripple>

      <md-card-actions>
        <md-button @click="openSharingDialog()">Μοιρασου</md-button>
        <md-button class="md-icon-button" @click="openSharingDialog()">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <SocialShareDialog :title="kataggelia.display" :url="getSharingUrl()" :trigger="triggerDialog" />
  </div>
</template>

<script>
import config from "~/data/config.json";
import SocialShareDialog from "./SocialShareDialog.vue";

export default {
  name: "KataggeliaCard",
  components: {
    SocialShareDialog
  },
  props: ["kataggelia"],
  data() {
    return {
      triggerDialog: false
    };
  },
  methods: {
    getSharingUrl() {
      const base = config.baseUrl;
      const url = `${base}/kataggelies#${this.kataggelia.slug}`;
      return url;
    },
    openSharingDialog() {
      this.triggerDialog = !this.triggerDialog;
    }
  }
};
</script>

<style scoped>
.card {
  padding-bottom: 6px;
}
.md-card-header {
  padding: 0px 16px 0px 16px;
  margin-bottom: 0px;
}
.md-title {
  margin-top: 6px;
  font-size: 18px;
  line-height: 120%;
}
.md-card-actions {
  padding-top: 0;
  padding-bottom: 0;
}
</style>