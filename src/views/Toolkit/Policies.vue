<template>
  <div>
    <PoliciesEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits')[3]"></PoliciesEng>
    <PoliciesEs v-else :toolkit="$t('toolkits')[3]"></PoliciesEs>
  </div>
</template>


<script>
import PoliciesEng from "./../../components/Toolkit_en/Policies";
import PoliciesEs from "./../../components/Toolkit_es/Policies";

export default {
  name: "workshops",
  components: {
    PoliciesEng,
    PoliciesEs
  }
};
</script>