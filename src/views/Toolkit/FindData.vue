<template>
<div>
<FindDataEng v-if="this.$i18n.locale == 'English'"></FindDataEng>
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
};
</script>