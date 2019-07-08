<template>
  <div class="film">
    <main>
      <h2>COMING SOON</h2>
    </main>
  </div>
</template>

<script>
import ToolkitTile from "../components/ToolkitTiles";
import { mapState } from "vuex";

export default {
  name: "Film",
  components: {
    ToolkitTile
  },
  computed: {
    ...mapState(["overviewToolkit"])
  }
};
</script>
