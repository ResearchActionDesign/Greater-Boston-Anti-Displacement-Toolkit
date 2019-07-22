<template>
  <div class="toolkits">
    <ToolkitTiles :workshops="Object.values($t('toolkits'))"></ToolkitTiles>
  </div>
</template>



<script>
import ToolkitTiles from '../components/ToolkitTiles'

export default {
  name: "ToolkitList",
  components: {
    ToolkitTiles
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  },
};
</script>