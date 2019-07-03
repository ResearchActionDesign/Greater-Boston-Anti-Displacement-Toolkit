<template>
  <div>
    <MappingEng v-if="this.$i18n.locale == 'English'"></MappingEng>
    <MappingEs v-else></MappingEs>
  </div>
</template>


<script>
import MappingEng from "./../../components/Toolkit_en/Mapping";
import MappingEs from "./../../components/Toolkit_es/Mapping";

export default {
  name: "workshops",
  components: {
    MappingEng,
    MappingEs
  }
};
</script>