<template>
    <div class="back_to_top" @click="backToTop()"
         :style="{'--workshop-color': toolkit.color }">&mdash; {{ $t('strings.backToTop') }} &mdash;</div>
</template>

<script>
  export default {
    props: ["toolkit"],
    // @see https://github.com/caiofsouza/vue-backtotop/blob/master/src/BackToTop.vue
    mounted () {
      window.smoothscroll = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.smoothscroll);
          window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)));
        }
      };
    },
    methods: {
      backToTop () {
        window.smoothscroll();
        this.$emit('scrolled');
      }
    }
  };
</script>

<style scoped>
  .back_to_top {
    font-size: 16pt;
    font-weight: bold;
    margin: auto;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
  }

  .back_to_top:hover {
    color: var(--workshop-color);
  }
</style>
