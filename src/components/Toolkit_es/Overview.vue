<template>
  <div class="overview">
    <img :src="overviewLogo" class="overviewImg" alt>
    <main>
      <h2>{{$t('overviewView.title')}}</h2>
      <p>{{$t('overviewView.summary')}}</p>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Overview",
  computed: {
    ...mapState(["overviewToolkit", "overviewLogo", "toolkits"])
  }
};
</script>
