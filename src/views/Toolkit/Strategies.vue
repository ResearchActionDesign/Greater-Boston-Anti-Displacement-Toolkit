<template>
  <div>
    <StrategiesEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.Strategies')"></StrategiesEng>
    <StrategiesEs v-else :toolkit="$t('toolkits.Strategies')"></StrategiesEs>
    <BackToTop :toolkit="$t('toolkits.Strategies')"></BackToTop>
  </div>
</template>


<script>
import StrategiesEng from "./../../components/Toolkit_en/Strategies";
import StrategiesEs from "./../../components/Toolkit_es/Strategies";
import BackToTop from '../../components/BackToTop';

export default {
  name: "workshops",
  components: {
    BackToTop,
    StrategiesEng,
    StrategiesEs
  },
};
</script>