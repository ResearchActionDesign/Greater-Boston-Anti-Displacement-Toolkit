<template>
  <div class="film">
    <main>
      <Toolkit :workshops="overviewToolkit"></Toolkit>
    </main>
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
