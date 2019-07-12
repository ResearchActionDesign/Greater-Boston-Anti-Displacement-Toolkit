<template>
  <section :aria-label="$t('strings.introduction')" class="introduction">
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">{{ $t('strings.introduction') }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
    props: ['toolkit'],
}
</script>