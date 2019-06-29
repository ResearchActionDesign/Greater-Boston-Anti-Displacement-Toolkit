<template>
  <section aria-label="introduction" class="introduction">
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Introduction</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
    props: ['toolkit'],
}
</script>