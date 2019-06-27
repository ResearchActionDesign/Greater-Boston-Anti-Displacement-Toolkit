<template>
  <main>
    <section aria-label="overview" class="overview">
      <h2 :style="{ color: toolkits[0].color }">{{toolkits[0].name}}</h2>
      <p>{{toolkits[0].question}}</p>
      <img :src="toolkits[0].img" class="tooltipLogo_large" alt>
      <p :style="{ color: toolkits[0].color }" class="bold">Workshop {{toolkits[0].num}}</p>
    </section>
    <section aria-label="introduction" class="introduction"></section>
    <section aria-label="Purpose and Outcomes" class="Purpose_and_Outcomes"></section>
    <section aria-label="Who to Invite" class="Who_to_Invite"></section>
    <section aria-label="Materials and Preparation" class="Materials_and_Preparation"></section>
    <section aria-label="Tips" class="Tips"></section>
    <section aria-label="Detailed Plan" class="Detailed_Plan">
      <section aria-label="Introducing the Activity" class="Introducing_the_Activity"></section>
      <section aria-label="Group Big Picture Questions" class="Group_Big_Picture_Questions"></section>
      <section aria-label="Reviewing the Basics" class="Reviewing_the_Basics"></section>
      <section aria-label="Producing Power Maps in Groups" class="Producing_Power_Maps_in_Groups"></section>
      <section aria-label="Show and Tell" class="Show_and_Tell"></section>
      <section aria-label="Discussion and Planning" class="Discussion_and_Planning"></section>
    </section>
    <section aria-label="Taking Action" class="Taking_Action"></section>
    <section aria-label="Additional Resources and Tools" class="Additional_Resources_and_Tools"></section>
  </main>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "workshops",
  computed: {
    ...mapState(["toolkits"])
  }
};
</script>