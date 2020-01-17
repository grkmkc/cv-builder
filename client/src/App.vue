<template>
  <div id="app">
    <Header></Header>
    <div class="main-wrapper">
      <left-menu />
      <Main />
    </div>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import LeftMenu from "./components/LeftMenu.vue";
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Main,
    LeftMenu,
    Header
  }
};
</script>

<style>
@import "./style/reset.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.main-wrapper {
  display: flex;
  height: 100%;
  background-color: #f5f5f5;
}
.left-menu {
  width: 25%;
  background: rgb(54, 60, 69);
}
.main {
  width: 75%;
  padding: 1em;
}
</style>
