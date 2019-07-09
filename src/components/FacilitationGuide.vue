<template>
  <section>
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Facilitation Guide</h2>

    <!-- Facilitation Guide -->
    <section aria-label="introduction" class="facilitationGuide">
      <h4 class="subcategory">Purpose</h4>
      <slot name="workshop_purpose"></slot>
      <h4 class="subcategory">Outcomes</h4>
      <slot name="workshop_outcomes"></slot>
    </section>

    <!-- Who to Invite -->
    <section aria-label="Who to Invite" class="Who_to_Invite">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Whom to Invite</h3>
      <slot name="Who_to_Invite"></slot>
    </section>

    <!-- Materials and Preparation -->
    <section aria-label="Materials and Preparation" class="Materials_and_Preparation">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Material & Prep</h3>
      <slot name="Materials_and_Preparation"></slot>
    </section>

    <!-- Tips -->
    <section aria-label="Tips" class="Tips">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Tips</h3>
      <slot name="Tips"></slot>
    </section>

    <!-- Detailed Plan -->
    <section aria-label="Detailed Plan" class="Detailed_Plan">
        <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Detailed Plan</h3>
        <slot name="Introducing_the_Activity"></slot>
        <slot name="Group_Big_Picture_Questions"></slot>
        <slot name="Reviewing_the_Basics"></slot>
        <slot name="Producing_Power_Maps_in_Groups"></slot>
        <slot name="Show_and_Tell"></slot>
        <slot name="Discussion_and_Planning"></slot>
    </section>



  </section>


</template>

<script>
export default {
  props: ["toolkit"]
};
</script>

<style>
  img {
    max-width: 90%;
    margin: 1em auto;
    display: block;
  }
</style>
