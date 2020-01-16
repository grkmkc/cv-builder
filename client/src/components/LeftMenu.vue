<template>
  <div class="left-menu">
    <h1>left</h1>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
  async mounted() {},
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
ul {
  list-style: none;
}
</style>
