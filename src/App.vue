<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">Overview</router-link> |
      <router-link to="/Toolkits">Toolkits</router-link> |
      <router-link to="/Film">Film</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    Header
  }
}
</script>
