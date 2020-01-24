<template>
  <div class="left-menu">
    <div class="wrapper">
      <h3 class="left-menu-sections">Sections</h3>
    </div>

    <ul class="left-menu-list">
      <li
        class="left-menu-list-items"
        v-for="(category, index) in categories"
        :key="index"
      >
        <p href style="color: #fff">{{ category.name.toUpperCase() }}</p>
        <a
          href="#"
          title="Add"
          class="add-circle-tag"
          @click="handleSectionAdd(category.name)"
        >
          <i class="fa fa-plus-circle" id="section-icons"></i>
        </a>
      </li>
    </ul>

    <div id="add-section-modal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  </div>
</template>

<script>
import categoryApiService from '../services/categoryApiService';
export default {
  name: 'Main',
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
  methods: {
    handleSectionAdd: function(category) {
      const modal = document.getElementById('add-section-modal');
      // Get the button that opens the modal
      const btn = document.getElementById('myBtn');
      // Get the <span> element that closes the modal
      const span = document.getElementsByClassName('close')[0];
      // When the user clicks the button, open the modal

      modal.style.display = 'block';

      // When the user clicks on <span> (x), close the modal

      /*     modal.style.display = 'none'; */
    }
  },
  computed: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../style/components/modal.css';
.left-menu {
  padding-right: 1em;
  padding-left: 1em;
}
.left-menu-list-items {
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #586677;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
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
.add-circle-tag {
  display: flex;
  align-items: center;
}
</style>
