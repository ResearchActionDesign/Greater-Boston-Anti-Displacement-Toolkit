<template>
  <div>
    <FilmEng v-if="this.$i18n.locale == 'en'"></FilmEng>
    <FilmEs v-else></FilmEs>
  </div>
</template>


<script>
  import FilmEng from "../components/Toolkit_en/Film";
  import FilmEs from "../components/Toolkit_es/Film";

  export default {
    name: "workshops",
    components: {
      FilmEng,
      FilmEs
    },
    mounted() {
      document.dispatchEvent(new Event("x-app-rendered"));
    }
  };
</script>