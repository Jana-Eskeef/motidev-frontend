import Vue from 'vue';
import App from './App.vue';
import router from './Router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you're using the CSS file

Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({
  router,
  vuetify, // Add Vuetify here
  render: (h) => h(App),
}).$mount('#app');