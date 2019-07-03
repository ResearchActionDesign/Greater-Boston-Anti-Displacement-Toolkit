<template>
  <div>
    <UseDataEng v-if="this.$i18n.locale == 'English'"></UseDataEng>
    <UseDataEs v-else></UseDataEs>
  </div>
</template>


<script>
import UseDataEng from "./../../components/Toolkit_en/UseData";
import UseDataEs from "./../../components/Toolkit_es/UseData";

export default {
  name: "workshops",
  components: {
    UseDataEng,
    UseDataEs
  }
};
</script>