import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue' 
import RegisterForm from '../components/RegisterForm.vue' 

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'RegisterForm',
    component: RegisterForm,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router