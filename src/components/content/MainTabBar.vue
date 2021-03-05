<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img src="~assets/image/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/home-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item  path="/category" activeColor="red">
        <img src="~assets/image/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/category-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img src="~assets/image/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/cart-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img src="~assets/image/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/profile-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>      
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
