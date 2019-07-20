<template>
<div>
    <g-link v-if="link.glink" :to="link.glink" class="unstyled">
        <slot />
    </g-link>

    <a v-if="link.href" :href="link.href" target="_blank" class="unstyled">
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

<style>
</style>