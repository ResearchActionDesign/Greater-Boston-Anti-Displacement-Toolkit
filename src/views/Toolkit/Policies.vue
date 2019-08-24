<template>
  <div>
    <PoliciesEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.Policies')"></PoliciesEng>
    <PoliciesEs v-else :toolkit="$t('toolkits.Policies')"></PoliciesEs>
    <BackToTop :toolkit="$t('toolkits.Policies')"></BackToTop>
  </div>
</template>


<script>
import PoliciesEng from "./../../components/Toolkit_en/Policies";
import PoliciesEs from "./../../components/Toolkit_es/Policies";
import BackToTop from '../../components/BackToTop';

export default {
  name: "workshops",
  components: {
    BackToTop,
    PoliciesEng,
    PoliciesEs
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  }
};
</script>