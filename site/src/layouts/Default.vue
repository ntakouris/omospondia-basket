<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary md-large" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <div>
          <img src="basketball.png" class="ball"/>
          <span class="md-title">{{ title }}</span>
        </div>
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

      <md-app-content>
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
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200),
  accent: md-get-palette-color(deeporange, A200)
));

@import "~vue-material/dist/theme/all";

.md-button-content {
  color: white;
}

.md-title {
  word-wrap: break-word;
  max-width: 100%;
}
.md-app {
  min-height: 100vh;
  border: 1px solid rgba(#000, .12);
}

.md-drawer {
  width: 250px;
  max-width: calc(100vw - 125px);
}

.ball {
  margin-right: 20px;
  width: 32px;
  height: 32px;
}
</style>