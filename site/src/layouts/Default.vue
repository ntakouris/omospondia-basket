<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{ title }}</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Μενού
        </md-toolbar>

        <md-list>
          <CompositeLink v-for="link in navlinks" :key="link.text" :link="link">
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
  data () {
    return {
      navlinks
    }
  }
}
</script>

<style scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  g-link {
    all: unset;
  }
</style>