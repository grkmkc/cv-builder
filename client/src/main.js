import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
Vue.config.productionTip = false;
const router = new VueRouter({
  /* mode: 'history', */ /* Open for production (build ) mode */
  routes: routes
});
Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
