<template>
  <div class="main-wrapper">
    <left-menu />
    <Main />
  </div>
</template>

<script>
import Main from './Main.vue';
import LeftMenu from './LeftMenu.vue';

export default {
  name: 'home',
  components: {
    Main,
    LeftMenu
  }
};
</script>

<style>
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
