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
      collapsed : true
    }
  },
  mounted () {
    const hash = document.location.hash.slice(1)

    if (hash && this.slugs.includes(hash)) {
      this.toggleCollapsed()

      this.$nextTick(() => {
        window.setTimeout(() => {
          document.location.hash = hash
          const el = document.getElementById(hash)
          el.scrollIntoView()
        }, 500)
      })
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