<template>
  <div>
    <StoriesEng v-if="this.$i18n.locale == 'en'" :toolkit="$t('toolkits.Stories')"></StoriesEng>
    <StoriesEs v-else :toolkit="$t('toolkits.Stories')"></StoriesEs>
    <BackToTop :toolkit="$t('toolkits.Stories')"></BackToTop>
  </div>
</template>


<script>
import StoriesEng from "./../../components/Toolkit_en/Stories";
import StoriesEs from "./../../components/Toolkit_es/Stories";
import BackToTop from '../../components/BackToTop';

export default {
  name: "workshops",
  components: {
    BackToTop,
    StoriesEng,
    StoriesEs
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  }
};
</script>