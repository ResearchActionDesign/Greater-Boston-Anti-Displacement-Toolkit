<template>
  <section>
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }"><slot name="Title">Facilitation Guide</slot></h2>

    <!-- Introduction -->
    <section aria-label="Purpose & Outcomes" class="Purpose_and_Outcomes">
      <table>
        <thead>
        <tr><th>Purpose</th><th>Outcomes</th></tr>
        </thead>
        <tbody>
        <tr><td><slot name="Workshop_Purpose"></slot></td><td><slot name="Workshop_Outcomes"></slot></td></tr>
        </tbody>
      </table>
    </section>

    <!-- Who to Invite -->
    <section v-if="$slots.Whom_to_Invite" aria-label="Whom to Invite" class="Whom_to_Invite">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Whom to Invite</h3>
      <slot name="Whom_to_Invite"></slot>
    </section>

    <!-- Materials and Preparation -->
    <section v-if="$slots.Materials_and_Preparation" aria-label="Materials and Preparation" class="Materials_and_Preparation">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Material & Prep</h3>
      <slot name="Materials_and_Preparation"></slot>
    </section>

    <!-- Tips -->
    <section v-if="$slots.Tips" aria-label="Tips" class="Tips">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Tips</h3>
      <slot name="Tips"></slot>
    </section>

    <!-- Detailed Plan -->
    <section aria-label="Detailed Plan" class="Detailed_Plan">
        <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">Detailed Plan</h3>
        <slot name="Detailed_Plan"></slot>
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

  .Purpose_and_Outcomes thead {
    background-color: black;
    color: white;
  }
</style>
