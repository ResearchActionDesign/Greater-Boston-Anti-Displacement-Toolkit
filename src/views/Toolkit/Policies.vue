<template>
  <div>
    <PoliciesEng v-if="this.$i18n.locale == 'en'"></PoliciesEng>
    <PoliciesEs v-else></PoliciesEs>
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