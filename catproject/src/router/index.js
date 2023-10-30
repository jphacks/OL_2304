import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../components/StartPage.vue'
import RegisterForm from '../components/RegisterForm.vue' 
import MyPage from '../components/MyPage.vue';
import FinishUpload from '../components/FinishUpload.vue'
import UploadExistingCat from '../components/UploadExistingCat.vue'
import PostingScreen from '../components/PostingScreen.vue'
import CatProfile from '../components/CatProfile.vue'
import HomePage from '../components/HomePage.vue'
import UploadNewCat from '../components/UploadNewCat.vue'
import UnSubscribe from '../components/UnSubscribe.vue'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
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
    path: '/upload-existing-cat',
    name: 'UploadExistingCat',
    component: UploadExistingCat
  },
  {
    path: '/posting-screen',
    name: 'PostingScreen',
    component: PostingScreen
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
    path: '/unsubscribe',
    name: 'UnSubscribe',
    component: UnSubscribe
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router