<template>
  <div class="app">
    <Header/>
    <SideMenu/>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    SideMenu,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  background-color: rgb(228, 228, 228);
}
</style>
