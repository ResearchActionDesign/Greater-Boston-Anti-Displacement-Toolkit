<template>
  <div>
    <StoriesEng v-if="this.$i18n.locale == 'English'"></StoriesEng>
    <StoriesEs v-else></StoriesEs>
  </div>
</template>


<script>
import StoriesEng from "./../../components/Toolkit_en/Stories";
import StoriesEs from "./../../components/Toolkit_es/Stories";

export default {
  name: "workshops",
  components: {
    StoriesEng,
    StoriesEs
  }
};
</script>