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
        <span class="close" @click="closeModal()">&times;</span>
        <p>please fill in this field then click the button 'add'</p>
        <div class="row" style="margin-top:1.5em; margin-bottom:2em">
          <div class="column">
            <ckeditor
              :editor="editor"
              v-model="editorData"
              :config="editorConfig"
            ></ckeditor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryApiService from '../services/categoryApiService';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
export default {
  name: 'Main',
  props: {
    msg: String
  },
  static: {},
  data() {
    // create data.
    return {
      categories: [],
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    };
  },
  components: {
    ckeditor: CKEditor.component
  },

  beforeCreate() {},
  created() {},
  async mounted() {
    let categories = await categoryApiService.getAllCategories();
    this.categories = categories;
  },
  methods: {
    handleSectionAdd: function(category) {
      const modal = document.getElementById('add-section-modal');
      const btn = document.getElementById('myBtn');
      const span = document.getElementsByClassName('close')[0];
      modal.style.display = 'block';
    },
    closeModal: function() {
      const modal = document.getElementById('add-section-modal');
      modal.style.display = 'none';
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
