<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ title }}</span>
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

<style scoped>
  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 250px;
    max-width: calc(100vw - 125px);
  }
</style>