<template>
  <p>
    <strong class="red_bold">{{ $t("strings.instructions") }}: </strong>
    <slot></slot>
  </p>
</template>

<style scoped>
.facilitator {
  font-style: italic;
}
</style>
