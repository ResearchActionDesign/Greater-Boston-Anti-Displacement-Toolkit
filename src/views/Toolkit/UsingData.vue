<template>
  <div>
    <UseDataEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits')[2]"></UseDataEng>
    <UseDataEs v-else :toolkit="$t('toolkits')[2]"></UseDataEs>
  </div>
</template>


<script>
import UseDataEng from "../../components/Toolkit_en/UsingData";
import UseDataEs from "./../../components/Toolkit_es/UseData";

export default {
  name: "workshops",
  components: {
    UseDataEng,
    UseDataEs
  }
};
</script>