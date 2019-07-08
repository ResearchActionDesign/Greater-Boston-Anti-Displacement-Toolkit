<template>
  <div>
    <OverviewEng v-if="this.$i18n.locale == 'en'"></OverviewEng>
    <OverviewEs v-else></OverviewEs>
  </div>
</template>


<script>
  import OverviewEng from "../components/Toolkit_en/Overview";
  import OverviewEs from "../components/Toolkit_es/Overview";

  export default {
    name: "workshops",
    components: {
      OverviewEng,
      OverviewEs
    }
  };
</script>