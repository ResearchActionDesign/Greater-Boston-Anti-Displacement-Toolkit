<template>
  <section :aria-label="$t('strings.additionalResources')" class="Additional_Resources_and_Tools">
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">{{ $t('strings.additionalResources') }}</h2>
    <p v-if="$i18n.locale === 'es'"><em>Nota: la mayoría de los recursos solo están disponibles en inglés.</em></p>
    <ul>
      <li v-for="(resource, index) in toolkit.resources" :key="index">
        <a :href="resource.link" target="_blank">{{resource.name}}</a> {{resource.text}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["toolkit"],
};
</script>
