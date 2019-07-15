<template>
  <div>
    <StoriesEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits')[5]"></StoriesEng>
    <StoriesEs v-else :toolkit="$t('toolkits')[5]"></StoriesEs>
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