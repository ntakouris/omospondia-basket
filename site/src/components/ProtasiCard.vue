<template>
  <md-card md-with-hover :class="collapsed ? 'smallflex' : 'bigflex'">
        <md-card-header>
          <div class="md-title">{{ title }}</div>
        </md-card-header>

        <md-card-content :class="collapsed ? 'collapsed' : 'uncollapsed'">
        <slot class="main-content"/>

        <p style="margin-left: 24px; margin-top: 12px; line-height: 48px;">Κατάθεση προτάσεων, προβλημάτων και καταγγελιών<md-button class="md-raised md-accent"> εδω</md-button></p>
        </md-card-content>
        
        <md-card-actions>
          <md-button @click="toggleCollapsed"> {{ collapsed ? 'Περισσοτερα' : 'Λιγοτερα'}}</md-button>
          <md-button class="md-icon-button" @click="toggleCollapsed">
            <md-icon>{{ collapsed ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</md-icon>
          </md-button>
        </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'ProtasiCard',
  props: ['title'],
  data () {
    return {
      collapsed: true
    }
  },
  methods: {
    toggleCollapsed: function () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped>
.main-content {
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul {
  margin: 0;
}
.md-card {
  margin: 0;
}
.md-card-header {
  padding: 4px 16px 0px 16px;
}
.md-title {
  font-size: 18px;
}
.collapsed {
  max-height: 80px;
  overflow: hidden;
}

.uncollapsed {
  max-height: 9999px;
}

.smallflex {
  /* flex: 1 0 41%; */
  flex: 2 0 100%;
}

.bigflex {
  flex: 2 0 100%;
}
</style>