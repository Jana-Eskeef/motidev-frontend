import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5D5FEF', // لون رئيسي أزرق مثلاً (رح نعدله حسب الصورة يلي بعتيها)
        secondary: '#FFC107', // لون تاني
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#F5F7FA' // لون الخلفية العامة
      }
    }
  }
});
