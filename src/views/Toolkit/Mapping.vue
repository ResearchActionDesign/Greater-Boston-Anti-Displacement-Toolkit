<template>
  <div>
    <MappingEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.Mapping')"></MappingEng>
    <MappingEs v-else :toolkit="$t('toolkits.Mapping')"></MappingEs>
  </div>
</template>


<script>
import MappingEng from "./../../components/Toolkit_en/Mapping";
import MappingEs from "./../../components/Toolkit_es/Mapping";

export default {
  name: "workshops",
  components: {
    MappingEng,
    MappingEs
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  }
};
</script>