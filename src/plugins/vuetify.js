import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6A0DAD',       // Deep purple (primary buttons/app bar)
        secondary: '#9C27B0',     // Medium purple (secondary elements)
        accent: '#E040FB',        // Bright purple accent (highlights)
        error: '#FF5252',         // Red (errors)
        info: '#2196F3',          // Blue (info)
        success: '#4CAF50',       // Green (success)
        warning: '#FFC107',       // Amber (warning)
        background: '#F3E5F5',    // Light purple background (subtle)
        
        // Optional: Extra purple shades
        'purple-lighten-1': '#BA68C8',
        'purple-darken-1': '#4A148C',
      }
    }
  }
});