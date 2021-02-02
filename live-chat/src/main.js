import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { projectAuth } from './firebase/config';

let app;

// Waiting for Firebase Auth to initialize and update the user state
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app');
  }
});
