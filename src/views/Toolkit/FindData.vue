<template>
<div>
<FindDataEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.FindingData')"></FindDataEng>
<FindDataEs v-else></FindDataEs>
</div>
</template>


<script>
import FindDataEng from "./../../components/Toolkit_en/FindData";
import FindDataEs from "./../../components/Toolkit_es/FindData";

export default {
  name: "workshops",
  components: {
    FindDataEng,
    FindDataEs
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  }
};
</script>