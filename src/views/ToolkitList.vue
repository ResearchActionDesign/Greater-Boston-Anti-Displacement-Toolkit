<template>
  <div class="toolkits">
    <ToolkitTiles :workshops="$t('toolkits')"></ToolkitTiles>
  </div>
</template>



<script>
import ToolkitTiles from '../components/ToolkitTiles'
import { mapState } from "vuex";

export default {
  name: "ToolkitList",
  components: {
    ToolkitTiles
  },
  computed: {
    ...mapState(["toolkits"])
  }
};
</script>