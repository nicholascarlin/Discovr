<template>
  <div class="app">
    <Header/>
    <SideMenu v-on:tabChanged="onTabChange" />
      <div class="pages">
        <HomePage v-if="tabIndex==1"/>

      </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
import Header from './components/Header.vue'
import HomePage from './components/HomePage.vue'

export default {
  data() {
    return {
      tabIndex: 1
    }
  },
  name: 'App',
  components: {
    SideMenu,
    Header,
    HomePage
  },
  methods: {
    onTabChange(value) {
      this.tabIndex = value;
      console.log(value);
    }
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

.pages {
  margin-left: 250px;
}
</style>
