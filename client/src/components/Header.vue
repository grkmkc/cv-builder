<template>
  <div class="header">
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">Builder</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div v-if="isLoggedIn" class="nav-links">
        <router-link to="/user">{{ userInfo.name }}</router-link>
        <a href="#!" @click="singout()">Sign Out</a>
      </div>
      <div v-else class="nav-links">
        <router-link to="/signin">Sign In</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Header',
  static: {},
  data() {
    // create data.
    return {
      user: {}
    };
  },
  components: {},
  beforeCreate() {},
  created() {},
  async mounted() {},
  methods: {
    singout: function() {
      window.sessionStorage.clear();
      this.$store.dispatch('signout').then(() => {
        this.$router.push('/signin');
      });
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'authStatus', 'userInfo'])
  },
  watch: {}
};
</script>

<style lang="css" scoped>
.nav {
  height: 50px;
  width: 100%;
  background-color: #383434;
  position: relative;
}
.nav > .nav-header {
  float: left;
}
.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}
.nav > .nav-btn {
  display: none;
}
.nav > .nav-links {
  float: right;
  font-size: 18px;
}
.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}
.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.nav > #nav-check {
  display: none;
}
@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
