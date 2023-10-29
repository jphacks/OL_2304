import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { mapkey } from './googlemapkey'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import vuetify from './plugins/vuetify'



const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(VueGoogleMaps, {
  load: {
    key: mapkey,
    language: 'ja',
  },
  autobindAllEvents: true,
});

// グローバルプロパティの設定
app.config.globalProperties.globallat = 317;
app.config.globalProperties.globallongi = 221;

//グローバル変数を設定
window.kuwagloballat = 3017;
window.kuwagloballongi = 2021;

window.selectedCatID = null;

/*const globalState = reactive({
    lat: 317,
    longi: 221
  });
  
  app.config.globalProperties.$globalState = globalState;*/

// アプリケーションのマウント
app.mount('#app');