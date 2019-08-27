<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to = "/test">Test
        </router-link>
      </el-menu-item>

      <el-menu-item index="2" >
        <router-link to = "/login">Login
        </router-link>
      </el-menu-item>

      <el-menu-item index="3">
        <router-link to = "/test">Orders
        </router-link>
      </el-menu-item>

    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
