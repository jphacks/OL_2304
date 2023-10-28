import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { mapkey } from './googlemapkey'
import VueGoogleMaps from '@fawmi/vue-google-maps'


createApp(App).use(router).use(VueGoogleMaps, {
    load: {
        key: mapkey,
        language: 'ja',
    },
    autobindAllEvents: true,
}).mount('#app')
