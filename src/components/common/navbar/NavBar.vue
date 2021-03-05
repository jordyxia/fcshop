<template>
  <div class = 'tab-nav'>
    <div class = 'nav-left'><slot name = 'nav-left'></slot></div>
    <div class = 'nav-center'><slot name = 'nav-center'></slot></div>
    <div class = 'nav-right'><slot name = 'nav-right'></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tab-nav {
  display:flex;
  height:44px;
  line-height:44px;
  text-align:center;
  
  box-shadow:0px 2px 1px rgb(100,100,100,0.1);

}

.nav-left {
  width:60px;

}

.nav-center {
  flex:1;

}

.nav-right {
  width:60px;
}

</style>
