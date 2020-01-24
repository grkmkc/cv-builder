<template>
  <div class="main">
    <div class="wrapper">
      <div class="row">
        <div class="column">
          <h1 style="padding-bottom: 0.2em">Profile</h1>
        </div>
      </div>
      <div class="row">
        as
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
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* box-shadow: 0px 2px 0px 0px #b5b3b3; */
  position: relative;
  margin-top: 0.5em;
  flex: 1 0 auto;
  -webkit-flex: 1 0 auto;
}
</style>
