<template>
  <section>
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }"><slot name="Title">{{ $t('strings.facilitationGuide')}}</slot></h2>

    <!-- Introduction -->
    <section :aria-label="$t('strings.purposeOutcomes')" class="Purpose_and_Outcomes">
      <table>
        <thead>
        <tr><th>{{$t('strings.purpose')}}</th><th>{{$t('strings.outcomes')}}</th></tr>
        </thead>
        <tbody>
        <tr><td><slot name="Workshop_Purpose"></slot></td><td><slot name="Workshop_Outcomes"></slot></td></tr>
        </tbody>

      </table>
    </section>

    <!-- Who to Invite -->
    <section v-if="$slots.Whom_to_Invite" :aria-label="$t('strings.whomToInvite')" class="Whom_to_Invite">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">{{ $t('strings.whomToInvite') }}</h3>
      <slot name="Whom_to_Invite"></slot>
    </section>

    <!-- Materials and Preparation -->
    <section v-if="$slots.Materials_and_Preparation" :aria-label="$t('strings.materialsPrep')" class="Materials_and_Preparation">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">{{ $t('strings.materialsPrep') }}</h3>
      <slot name="Materials_and_Preparation"></slot>
    </section>

    <!-- Tips -->
    <section v-if="$slots.Tips" :aria-label="$t('strings.tips')" class="Tips">
      <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">{{ $t('strings.tips') }}</h3>
      <slot name="Tips"></slot>
    </section>

    <!-- Detailed Plan -->
    <section :aria-label="$t('strings.detailedPlan')" class="Detailed_Plan">
        <h3 :style="{ borderBottom: '1px solid ' + toolkit.color }">{{ $t('strings.detailedPlan') }}</h3>
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
