// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Profile from './pages/Profile.vue'
import AddPost from './pages/AddPost.vue'
import Register from './pages/Register.vue'
import EditProfile from './pages/EditProfile.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register},
  { path: '/home', component: Home },
  { path: '/profile', component: Profile },
  { path: '/add-post', component: AddPost },
  { path: '/edit-profile', component: EditProfile}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
