import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'; // ต้องนำเข้าคอมโพเนนต์ 'RegisterView' ที่ถูกต้อง
import HomeView from '../views/HomeView.vue'
import AllProductView from '../views/AllProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import ProductDetail from'../components/ProductDetail.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
  path: '/home',
  name: 'home',
  component: HomeView 
},
{
  path: '/allproduct',
  name: 'allproduct',
  component: AllProductView 
},
{
  path: '/contact',
  name: 'contact',
  component: ContactView 
},

{
  path: '/cart',
  name: 'cart',
  component: CartView 
},

{
  path: '/product/:id',
  component: ProductDetailView,
  // name: 'ProductDetail',
  props: true,
},


  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
