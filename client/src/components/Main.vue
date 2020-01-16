<template>
  <div class="main">
    <h1>Main</h1>
  </div>
</template>

<script>
import userApiService from '../services/userApiService';
export default {
  name: 'Main',
  props: {
    msg: String
  },
  static: {},
  data() {
    // create data.
    return {};
  },
  components: {},

  beforeCreate() {},
  created() {},
  async mounted() {
    let user = await userApiService.getAll();
    console.log(user);
  },
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
<style scoped></style>
