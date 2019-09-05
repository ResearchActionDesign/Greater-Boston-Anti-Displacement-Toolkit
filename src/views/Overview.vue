<template>
  <div>
    <OverviewEng v-if="this.$i18n.locale == 'en'"></OverviewEng>
    <OverviewEs v-else></OverviewEs>
    <nav>
    <h2 :style="{ borderBottom: '2px solid ' + $t('overviewToolkit').color, maxWidth: '700px', margin: 'auto' }">{{ $t('strings.toolkitContents') }}</h2>
    <div class="toolkits">
      <ToolkitTiles :workshops="Object.values($t('toolkits'))"></ToolkitTiles>
    </div>
    </nav>
  </div>
</template>


<script>
  import OverviewEng from "../components/Toolkit_en/Overview";
  import OverviewEs from "../components/Toolkit_es/Overview";
  import ToolkitTiles from '../components/ToolkitTiles';

  export default {
    name: "workshops",
    components: {
      ToolkitTiles,
      OverviewEng,
      OverviewEs
    },
  };
</script>