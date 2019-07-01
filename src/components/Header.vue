<template>
<div>
  <button @click="changeLanguage" class="langChanger" :aria-label="'Translate to ' + otherLang">
      <img src="./../assets/web.svg" :alt="'Translate to ' + otherLang">
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
export default {
  data(){
    return{
      otherLang: "spanish"
    }
  },
  methods: {
    changeLanguage(){
      if(this.$i18n.locale == 'en'){
        this.$i18n.locale = 'es'
        this.otherLang = "english"
      }
      else{
        this.$i18n.locale = 'en'
        this.otherLang= "spanish"
      }
    }
  }
}
</script>

<style>
.langChanger{
  clear: right;
  margin: 2em;
  background-color: transparent;
  border: none;
}
.langLabel{
  margin: 0
}
</style>

