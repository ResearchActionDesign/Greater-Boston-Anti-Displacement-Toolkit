<template>
  <div>
    <UseDataEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.UsingData')"></UseDataEng>
    <UseDataEs v-else :toolkit="$t('toolkits.UsingData')"></UseDataEs>
    <BackToTop :toolkit="$t('toolkits.UsingData')"></BackToTop>
  </div>
</template>


<script>
import UseDataEng from "../../components/Toolkit_en/UsingData";
import UseDataEs from "./../../components/Toolkit_es/UsingData";
import BackToTop from '../../components/BackToTop';

export default {
  name: "workshops",
  components: {
    BackToTop,
    UseDataEng,
    UseDataEs
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  }
};
</script>