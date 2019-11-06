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
  props: ['title', 'slugs'],
  data () {
    return {
      collapsed : false
    }
  },
  mounted () {
    this.collapsed = true
    const hash = document.location.hash.slice(1)

    if (hash && this.slugs.includes(hash)) {
      this.collapsed = false
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed

      if (!this.collapsed) {
        this.$emit('expand', true)
      }
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