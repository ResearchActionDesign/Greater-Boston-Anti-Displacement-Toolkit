<template>
  <div>
    <StrategiesEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits')[4]"></StrategiesEng>
    <StrategiesEs v-else :toolkit="$t('toolkits')[4]"></StrategiesEs>
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