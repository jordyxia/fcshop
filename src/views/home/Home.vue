<template>
  <div class = 'home-nav'>
    <nav-bar>
      <div slot = 'nav-center'>首页</div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Home",
  components:{
    NavBar
  }
}
</script>


<style>
.home-nav {
  background-color:red;
  color:white;
  font-size:18px;
}
</style>
