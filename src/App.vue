<template>
  <div id="app">
    <Header></Header>
    <nav class="nav" v-grid="'1fr 1fr 1fr'">
      <router-link to="/">Overview</router-link>
      <router-link to="/Toolkits" class="toolkitsNav">Toolkits</router-link>
      <router-link to="/Film">Film</router-link>
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
