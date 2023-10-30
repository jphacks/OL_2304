import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue' 
import RegisterForm from '../components/RegisterForm.vue' 
import MyPage from '../components/MyPage.vue';
import FinishUpload from '../components/FinishUpload.vue'
import UploadExistCat from '../components/UploadExistCat.vue'
import CatMap from '../components/CatMap.vue'
import CatProfile from '../components/CatProfile.vue'
import HomePage from '../components/HomePage.vue'
import UploadNewCat from '../components/UploadNewCat.vue'
import UnSubscribed from '../components/UnSubscribed.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/register-form',
    name: 'RegisterForm',
    component: RegisterForm,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/finishupload',
    name: 'FinishUpload',
    component: FinishUpload
  },
  {
    path: '/upload-exist-cat',
    name: 'UploadExistCat',
    component: UploadExistCat
  },
  {
    path: '/cat-map',
    name: 'CatMap',
    component: CatMap
  },
  {
    path: '/cat-profile',
    name: 'CatProfile',
    component: CatProfile
  },
  {
    path: '/home-page',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/upload-new-cat',
    name: 'UploadNewCat',
    component: UploadNewCat
  },
  {
    path: '/unsubscribed',
    name: 'UnSubscribed',
    component: UnSubscribed
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router