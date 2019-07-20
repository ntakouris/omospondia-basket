<template>
<div>
    <g-link v-if="link.glink" :to="link.glink">
        <slot />
    </g-link>

    <a v-if="link.href" :href="link.href" target="_blank">
        <slot />
    </a>
</div>
</template>

<script>
  export default {
    name: 'CompositeLink',
    props: ['link']
  }
</script>

<style scoped>
</style>