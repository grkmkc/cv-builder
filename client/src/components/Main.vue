<template>
  <div class="main">
    <div class="wrapper">
      <div class="row">
        <div class="column">
          <h1 style="padding-bottom: 0.2em">Profile</h1>
        </div>
      </div>
      <div class="row profile">
        <div class="column column-20 md-column-20 sm-column-30 user-avatar">
          <div class="user-image">
            <span class="user-image-initials">GK</span>
          </div>
        </div>
        <div class="column column-80 md-column-80 sm-column-70 user-info">
          There is a place for some about section
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import userApiService from "../services/userApiService"; */
export default {
  name: 'Main',
  props: {},
  static: {},
  data() {
    // create data.
    return {
      users: []
    };
  },
  components: {},

  beforeCreate() {},
  created() {},
  /* async mounted() {
    let user = await userApiService.getAll();
    this.users = user;
  }, */
  methods: {},
  computed: {
    // stream() {
    //     return this.$store.getters.getstreamerdata
    // },
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import '../style/mainpage.css';
</style>
