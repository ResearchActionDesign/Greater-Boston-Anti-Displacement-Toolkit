<template>
  <div>
    <MappingEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.Mapping')"></MappingEng>
    <MappingEs v-else :toolkit="$t('toolkits.Mapping')"></MappingEs>
    <BackToTop :toolkit="$t('toolkits.Policies')"></BackToTop>
  </div>
</template>


<script>
import MappingEng from "./../../components/Toolkit_en/Mapping";
import MappingEs from "./../../components/Toolkit_es/Mapping";
import BackToTop from '../../components/BackToTop';

export default {
  name: "workshops",
  components: {
    BackToTop,
    MappingEng,
    MappingEs
  },
};
</script>