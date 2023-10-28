import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Vue Routerをインポート

// Vue Routerをアプリケーションに統合
createApp(App).use(router).mount('#app')