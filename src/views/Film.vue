<template>
  <div class="overview">
    <img :src="overviewLogo" class="overviewImg" alt>
    <main>
      <Toolkit :workshops="overviewToolkit"></Toolkit>
    </main>
    <!-- <div>{{toolkits}}</div> -->
  </div>
</template>

<script>
import Toolkit from "./../components/Toolkit";
import { mapState } from "vuex";

export default {
  name: "Film",
  components: {
    Toolkit
  },
  computed: {
    ...mapState(["overviewToolkit"])
  }
};
</script>
