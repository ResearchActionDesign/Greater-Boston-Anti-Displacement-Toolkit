<template>
  <div>
    <OverviewEng v-if="this.$i18n.locale == 'en'"></OverviewEng>
    <OverviewEs v-else></OverviewEs>
    <BackToTop :toolkit="$t('overviewToolkit')"></BackToTop>
  </div>
</template>


<script>
  import OverviewEng from "../components/Toolkit_en/Overview";
  import OverviewEs from "../components/Toolkit_es/Overview";
  import BackToTop from '../components/BackToTop';

  export default {
    name: "workshops",
    components: {
      BackToTop,
      OverviewEng,
      OverviewEs
    },
    mounted() {
      document.dispatchEvent(new Event("x-app-rendered"));
    }
  };
</script>