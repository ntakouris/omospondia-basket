<template>
  <div>
    <div @click="toggleCollapsed()" class="expandable-header">{{ title }} <md-icon>{{ collapsed ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</md-icon></div>
    <div style="margin-left: 12px;" v-if="!collapsed">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleExpandable',
  props: ['title'],
  data () {
    return {
      collapsed : true
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped>
.expandable-header {
  color: blue;
}
.expandable-header:hover {
  cursor: pointer;
}
</style>