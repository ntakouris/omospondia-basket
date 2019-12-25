<template>
  <div class="page-container md-layout-row">
    <md-app id="app-container">
      <md-app-toolbar class="md-primary md-toolbar-row md-toolbar-offset toolbar" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <img src="/basketball.png" style="margin-right: 12px; display: inline-block;" class="ball"/>

        <span class="md-title" style="font-size: 18px;">basket12.gr - Για μια ομοσπονδία συμμετοχής και ανάπτυξης με διαφάνεια</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full" id="drawer">
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
              <md-icon class="menu-icon">{{ link.icon }}</md-icon>
              <span class="md-list-item-text">{{ link.text }}</span>
            </md-list-item>
          </CompositeLink>
        </md-list>
      </md-app-drawer>

      <md-app-content class="md-scrollbar content">
        <h1 class="title">{{ title }}</h1>
        <slot />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import navlinks from '~/data/navlinks.json'
import CompositeLink from '~/components/CompositeLink.vue'

export default {
  name: 'Default',
  components: {
    CompositeLink
  },
  props: ['title'],
  data: () => ({
    windowHeight: 0,
    navlinks,
    menuVisible: false
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  },
  mounted () {
    if (window.innerWidth >= 730) {
      this.menuVisible = true
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

.md-app {
  min-height: 100vh;
  border: 1px solid rgba(#000, .12);
}

.ball {
  margin-right: 20px;
  width: 32px;
  height: 32px;
}

#drawer {
  max-width: 360px;
}

.md-content .title{
  margin-top: 0px;
  line-height: 28px;
}

.anchor-pad-bot {
  height: 100%;
}

.tweetline-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
}

.menu-icon {
  margin-left: 8px !important;
  margin-right: 32px !important;
}

.scroll-workaround {
  padding-top: 80px;
  margin-top: -80px;
  outline: none !important;
  border: 0;
}

.scroll-workaround:active, .scroll-workaround:focus { 
 outline: none !important; 
 border: 0;
}
</style>