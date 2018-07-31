<template>
  <div id="app">
    <m-header></m-header>
    <sidebar></sidebar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import './assets/js/iconfont.js'
import MHeader from './components/m-header/m-header'
import Sidebar from './components/sidebar/sidebar'
export default {
  name: 'App',
  components: {
    MHeader,
    Sidebar
  }
}
</script>

<style>
@import "./assets/css/base.css";
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  font-size: 10px;
  font-family: Roboto, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
