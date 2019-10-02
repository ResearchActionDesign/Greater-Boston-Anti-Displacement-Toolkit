<template>
  <a target="_blank" rel="noopener"><slot />
    <svg v-if="showIcon" class="icon external-link-icon" :alt="$t('strings.openNewWindow')">
      <use xlink:href="./../assets/icons/open_in_new.svg#open_in_new"></use>
    </svg><span v-else class="screenreader-only"> {{ $t('strings.openNewWindow') }}</span></a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    showIcon: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style scoped>
  .external-link-icon {
    width: 12px;
    height: 12px;
    margin: -0.5em 0.1em 0 0em;
    padding: 0;
    vertical-align: middle;
  }
</style>
