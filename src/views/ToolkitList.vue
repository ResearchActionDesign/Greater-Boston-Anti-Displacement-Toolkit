<template>
  <div class="toolkits">
    <ToolkitTiles :workshops="$t('toolkits')"></ToolkitTiles>
  </div>
</template>



<script>
import ToolkitTiles from '../components/ToolkitTiles'

export default {
  name: "ToolkitList",
  components: {
    ToolkitTiles
  },
};
</script>