<template>
<div class="header">
  <button @click="changeLanguage" class="langChanger" :aria-label="$t('translateTo')">
    <img src="./../assets/web.svg" :alt="$t('translateTo')">
    <p class="langLabel">{{$i18n.locale}}</p>
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
    changeLanguage(){
      if(this.$i18n.locale == 'en'){
        this.$i18n.locale = 'es'
      }
      else{
        this.$i18n.locale = 'en'
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
</style>