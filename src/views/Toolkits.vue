<template>
  <div class="toolkits">
    <Toolkit :workshops="$t('toolkits')"></Toolkit>
  </div>
</template>



<script>
import Toolkit from './../components/Toolkit'
import { mapState } from "vuex";

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