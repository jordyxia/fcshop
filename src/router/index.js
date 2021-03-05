import Vue from "vue"
import VueRouter from 'vue-router'



const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")

//1.安装插件：
Vue.use(VueRouter)

//vue 路由报错 NavigationDuplicated: Avoided redundant navigation to current location解决方法
//获取原型对象上的replace函数
const originalReplace = VueRouter.prototype.replace
//修改原型对象中的replace方法
VueRouter.prototype.replace = function replace(location) {
 	return originalReplace.call(this, location).catch(err => err)
 }

//2.创建路由对象：
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

//3.导出router
export default router