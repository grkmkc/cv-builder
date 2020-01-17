<template>
  <div class="left-menu">
    <div class="wrapper">
      <h3 class="left-menu-sections">Sections</h3>
      <a href title="You can select and drag items to area">
        <i class="fa fa-question-circle" id="section-icons"></i>
      </a>
    </div>

    <ul class="left-menu-list">
      <li class="left-menu-list-items" v-for="(category,index) in categories" :key="index">
        <a href style="color: #fff">{{ category.name.toUpperCase()}}</a>
        <a href title="Add">
          <i class="fa fa-plus-circle" id="section-icons"></i>
        </a>
      </li>
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
/* .left-menu-list {
  
} */
.left-menu-list-items {
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.left-menu-sections {
  margin-top: 1em;
  color: white;
  padding-bottom: 0.5em;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  box-shadow: 0px 2px 0px 0px #b5b3b3;
  position: relative;
}
ul {
  list-style: none;
}
#section-icons {
  position: absolute;
  right: 8px;
  color: #fff;
}
</style>
