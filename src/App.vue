<template>
  <div id="app">
    <Header></Header>
    <nav class="nav" v-grid="'1fr 1fr 1fr 1fr'">
      <router-link  :to="{ name: 'Overview', params: { lang: this.$i18n.locale }}">{{ $t('overview') }}</router-link>
      <router-link :to="{ name: 'Toolkit' + (this.$i18n.locale === 'es' ? '-es' : ''), params: { lang: this.$i18n.locale }}" class="toolkitsNav">{{
        $t('toolkit') }}</router-link>
      <router-link :to="{ name: 'Film' + (this.$i18n.locale === 'es' ? '-es' : ''), params: { lang: this.$i18n.locale }}" class="toolkitsNav">{{ $t('film') }}</router-link>
      <router-link :to="{ name: 'Resources' + (this.$i18n.locale === 'es' ? '-es' : ''), params: { lang: this.$i18n.locale }}">{{ $t('resources') }}</router-link>
    </nav>
    <router-view/>
    <Partners></Partners>
  </div>
</template>

<script>
import Header from './components/Header'
import Partners from './components/Partners'
export default {
  components: {
    Header,
    Partners
  }
}
</script>
