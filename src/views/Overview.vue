<template>
  <div class="overview">
    <img :src="overviewLogo" class="overviewImg" alt>
    <main>
      <h2>{{$t('overviewView.title')}}</h2>
      <p>{{$t('overviewView.summary')}}</p>
      <Toolkit :workshops="overviewToolkit"></Toolkit>

      {{toolkits}}
    </main>
  </div>
</template>

<script>
import Toolkit from "./../components/Toolkit";
import { mapState } from "vuex";

export default {
  name: "Overview",
  components: {
    Toolkit
  },
  computed: {
    ...mapState(["overviewToolkit", "overviewLogo", "toolkits"])
  }
};
</script>
