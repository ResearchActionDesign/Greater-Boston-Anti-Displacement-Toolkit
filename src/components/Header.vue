<template>
<div class="header">
  <nav>
  <button @click="changeLanguage" class="langChanger" :aria-label="$t('translateTo')">
    <p class="langLabel">{{$t('translateTo')}}</p>
  </button>
  </nav>

  <header><slot name="title">
    <router-link :to="{ name: 'Overview', params: { locale: $i18n.locale }}" class="routerLink">
      <p class="title">{{ $t('header') }}</p>
    </router-link>
  </slot>
  </header>
</div>

</template>

<script>
export default {
  methods: {
    changeLanguage() {
      if (this.$route.name === 'Home' && this.$i18n.locale === 'en') {
        this.$router.push({ name: 'Overview', params: { locale: 'es' }});
      }
      if (this.$i18n.locale === 'en') {
        this.$router.push({ name: this.$route.name, params: { locale: 'es' }});
      }
      else {
        this.$router.push({ name: this.$route.name, params: { locale: 'en' }});
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
    color: black;
  }

  .langChanger {
    cursor: pointer;
    min-height: 60px;
    min-width: 120px;
    font-size: 14px;
  }
</style>