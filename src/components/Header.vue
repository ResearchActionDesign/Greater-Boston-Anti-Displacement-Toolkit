<template>
<div class="header">
  <button @click="changeLanguage" class="langChanger" :aria-label="$t('translateTo')">
    <p class="langLabel">{{$t('translateTo')}}</p>
  </button>

  <header>
    <router-link to="/" class="routerLink">
      <p class="title">{{ $t('header') }}</p>
    </router-link>
  </header>
</div>

</template>

<script>
export default {
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === 'en') {
        this.$router.push({ params: { locale: 'es' }});
      }
      else{
        this.$router.push({ params: { locale: 'en' }});
      }
    }
  }
}
</script>

<style scoped>
  .title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }

  .langChanger {
    cursor: pointer;
  }
</style>