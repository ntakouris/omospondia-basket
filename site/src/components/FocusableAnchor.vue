<template>
  <a :href="href" target="_blank" :id="id" 
    v-bind:style="{ color: docHashMatches ? 'red' : 'default'}"
    :class="{ 'scroll-workaround': true, ..._class}"><slot /></a>
</template>

<script>

export default {
  props: ["href", "id", "_class"],
  data() {
    return {
      docHashMatches: false
    };
  },
  mounted () {
    const hash = document.location.hash.slice(1)
    this.hash = hash
    if (hash && hash === this.id) {
      this.docHashMatches = true
    }
  },
};
</script>
