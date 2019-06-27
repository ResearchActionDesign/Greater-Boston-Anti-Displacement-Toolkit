<template>
  <div class="toolkits">
    <Toolkit :workshops="toolkits"></Toolkit>
  </div>
</template>



<script>
import Toolkit from './../components/Toolkit'
import { mapState } from "vuex";
// @ is an alias to /src

export default {
  name: "Toolkits",
  components: {
    Toolkit
  },
  computed: {
    ...mapState(["toolkits"])
  }
};
</script>