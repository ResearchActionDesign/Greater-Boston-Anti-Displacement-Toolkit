<template>
  <div class="workshops">
    <Mapping></Mapping>
  </div>
</template>

<script>
import Mapping from './../components/Workshops/Mapping'
import { mapState } from "vuex";

export default {
  name: "workshops",
  components: {
    Mapping
  },
  computed: {
    ...mapState(["toolkits"])
  }
};
</script>