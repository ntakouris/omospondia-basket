<template>
  <div>
    <div>{{ title }}</div>
    <div style="margin-left: 12px;">
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

<style>
</style>