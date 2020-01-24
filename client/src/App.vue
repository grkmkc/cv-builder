<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style>
@import './style/reset.css';
@import './style/components/alert.css';
@import './style/components/button.css';
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.ck-editor__editable_inline {
  min-height: 200px;
  line-height: 1.5em;
}
</style>
