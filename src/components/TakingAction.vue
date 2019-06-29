<template>
  <section aria-label="Taking Action" class="Taking_Action">
        <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Taking Action</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
    props: ['toolkit'],
}
</script>