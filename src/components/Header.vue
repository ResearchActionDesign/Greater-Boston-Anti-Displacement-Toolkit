<template>
<div class="header">
  <button @click="changeLanguage" class="langChanger" :aria-label="translateTo">
    <img src="./../assets/web.svg" :alt="translateTo">
    <p class="langLabel">{{this.$i18n.locale}}</p>
  </button>

  <header>
    <router-link to="/" class="routerLink">
      <h1>{{ $t('header') }}</h1>
    </router-link>
  </header>
</div>

</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['translateTo'])
  },
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
