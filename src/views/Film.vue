<template>
  <div>
    <FilmEng v-if="this.$i18n.locale == 'en'"></FilmEng>
    <FilmEs v-else></FilmEs>
    <BackToTop :toolkit="$t('filmToolkit')"></BackToTop>
  </div>
</template>


<script>
  import FilmEng from "../components/Toolkit_en/Film";
  import FilmEs from "../components/Toolkit_es/Film";
  import BackToTop from '../components/BackToTop';

  export default {
    name: "workshops",
    components: {
      BackToTop,
      FilmEng,
      FilmEs
    },
    mounted() {
      document.dispatchEvent(new Event("x-app-rendered"));
    }
  };
</script>