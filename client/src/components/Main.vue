<template>
  <div class="main">
    <h1>Main</h1>
    <ul>
      <li
        v-for="(user, index) in users"
        v-bind:index="index"
        :key="user.id"
      >{{ index + 1 }} - {{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
/* import userApiService from "../services/userApiService"; */
export default {
  name: "Main",
  props: {
    msg: String
  },
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
</style>
