<template>
  <div class="left-menu">
    <ul>
      <li v-for="(category,index) in categories" :key="index">{{index + 1}} - {{ category.name}}</li>
    </ul>
  </div>
</template>

<script>
import categoryApiService from "../services/categoryApiService";
export default {
  name: "Main",
  props: {
    msg: String
  },
  static: {},
  data() {
    // create data.
    return {
      categories: []
    };
  },
  components: {},

  beforeCreate() {},
  created() {},
  async mounted() {
    let categories = await categoryApiService.getAllCategories();
    this.categories = categories;
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
