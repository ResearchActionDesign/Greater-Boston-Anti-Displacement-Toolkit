<template>
  <main>
    <h1 :style="{ maxWidth: '700px', margin: 'auto' }">{{ $t('strings.toolkitContents') }}</h1>
    <div class="toolkits">
    <ToolkitTiles :workshops="Object.values($t('toolkits'))"></ToolkitTiles>
  </div>
  </main>
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