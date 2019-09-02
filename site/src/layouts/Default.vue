<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary md-toolbar-row md-toolbar-offset toolbar" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <img src="/basketball.png" style="margin-right: 12px;" class="ball"/>

        <span class="md-title" style="">basket12.gr</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
          <md-toolbar class="md-transparent" md-elevation="0">
            <CompositeLink :link="{ glink: '/' }" class="md-toolbar-section-start"><span style="color: black;">Αρχική Σελίδα</span></CompositeLink>
            <md-button class="md-icon-button md-dense md-toolbar-section-end" @click="toggleMenu" v-if="menuVisible">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </md-toolbar>
        <md-list>
          <CompositeLink v-for="link in navlinks" :key="link.text" :link="link">
            <md-divider class="md-inset"/>

            <md-list-item>
              <md-icon>{{ link.icon }}</md-icon>
              <span class="md-list-item-text">{{ link.text }}</span>
            </md-list-item>
          </CompositeLink>
        </md-list>
      </md-app-drawer>

      <md-app-content class="md-scrollbar content">
        <h1 class="title">{{ title }}</h1>
        <slot />

        <hr style="margin-top: 32px; margin-bottom: 32px;"/>
        <!-- Tweets -->
        <div class="tweetline-container">
          <Timeline class="tweetline" id="v_ntakouris" sourceType="profile" :options="{ tweetLimit: '3', width: 550, height: 200}">
            Loading Tweets...
          </Timeline>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import navlinks from '~/data/navlinks.json'
import CompositeLink from '~/components/CompositeLink.vue'
import {Timeline} from 'vue-tweet-embed'

export default {
  name: 'Default',
  components: {
    CompositeLink,
    Timeline
  },
  props: ['title'],
  data: () => ({
    windowHeight: 0,
    navlinks,
    menuVisible: true
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  },
  mounted () {
    if (window.innerWidth < 730) {
      this.menuVisible = false
    }
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200),
  accent: md-get-palette-color(orange, A200)
));

@import "~vue-material/dist/theme/all";

a {
  text-decoration: underline;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
  color: purple;
}

.md-title {
  overflow: hidden;
  text-overflow: ellipsis;
}

.md-app {
  min-height: 100vh;
  border: 1px solid rgba(#000, .12);
}

.md-drawer {
  width: 180px;
  max-width: calc(100vw - 140px);
}

.ball {
  margin-right: 20px;
  width: 32px;
  height: 32px;
}

.md-content .title{
  margin-top: 0px;
  line-height: 28px;
}

.tweetline-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
}
</style>