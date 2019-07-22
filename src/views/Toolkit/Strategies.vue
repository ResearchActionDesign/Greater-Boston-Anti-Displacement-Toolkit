<template>
  <div>
    <StrategiesEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.Strategies')"></StrategiesEng>
    <StrategiesEs v-else></StrategiesEs>
  </div>
</template>


<script>
import StrategiesEng from "./../../components/Toolkit_en/Strategies";
import StrategiesEs from "./../../components/Toolkit_es/Strategies";

export default {
  name: "workshops",
  components: {
    StrategiesEng,
    StrategiesEs
  }
};
</script>