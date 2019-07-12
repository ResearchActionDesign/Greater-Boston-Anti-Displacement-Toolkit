<template>
  <section :aria-label="$t('strings.takingAction')" class="Taking_Action">
        <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">{{ $t('strings.takingAction') }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
    props: ['toolkit'],
}
</script>