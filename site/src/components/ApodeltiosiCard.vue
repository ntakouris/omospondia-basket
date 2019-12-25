<template>
  <div class="card">
    <md-card :md-elevation="1" md-with-hover class="diadikasia-card" style="margin-left: 0;">
      <md-ripple>
        <md-card-header>
          <FocusableAnchor :href="apodeltiosi.href" :id="apodeltiosi.slug">
            <div class="md-title">{{ apodeltiosi.display }}</div>
          </FocusableAnchor>

          <div class="md-subhead">{{ apodeltiosi.author }} - {{ apodeltiosi.date }}</div>
        </md-card-header>
      </md-ripple>

      <md-card-content v-if="apodeltiosi.content">
        {{ apodeltiosi.content }}
      </md-card-content>

      <md-card-actions>
        <md-button @click="openSharingDialog()">Μοιρασου</md-button>
        <md-button class="md-icon-button" @click="openSharingDialog()">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <SocialShareDialog :title="apodeltiosi.display" :url="getSharingUrl()" :trigger="triggerDialog" />
  </div>
</template>

<script>
import config from "~/data/config.json"
import SocialShareDialog from "./SocialShareDialog.vue"
import FocusableAnchor from './FocusableAnchor.vue'

export default {
  name: "ApodeltiosiCard",
  components: {
    SocialShareDialog,
    FocusableAnchor
  },
  props: ["apodeltiosi"],
  data() {
    return {
      triggerDialog: false
    };
  },
  methods: {
    getSharingUrl() {
      const base = config.baseUrl;
      const url = `${base}/apodeltiosi#${this.apodeltiosi.slug}`;
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
.md-card-content {
  padding-top: 0;
  padding-bottom: 0;
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