<template>
  <img :src="require(`./../assets/facilitator_drawings/${toolkit.link}_${number}.png`)" class="facilitatorImage">
</template>

<script>
  export default {
    name: 'FacilitatorImage',
    props: [
      "toolkit",
      "number",
    ],
  };
</script>

<style scoped>
  img.facilitatorImage {
    width: 300px;
    margin-left: 0;
    margin-bottom: -1em;
    margin-top: 2em;
  }
</style>