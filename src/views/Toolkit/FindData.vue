<template>
<div>
<FindDataEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.FindingData')"></FindDataEng>
<FindDataEs v-else :toolkit="$t('toolkits.FindingData')"></FindDataEs>
  <BackToTop :toolkit="$t('toolkits.FindingData')"></BackToTop>
</div>
</template>


<script>
import FindDataEng from "./../../components/Toolkit_en/FindData";
import FindDataEs from "./../../components/Toolkit_es/FindData";
import BackToTop from '../../components/BackToTop';

export default {
  name: "workshops",
  components: {
    BackToTop,
    FindDataEng,
    FindDataEs
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  }
};
</script>