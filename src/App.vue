<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to = "/" class="remove_decoration">Home
        </router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <router-link to = "/dashboard" class="remove_decoration">Dashboard
        </router-link>
      </el-menu-item>

      <el-menu-item index="3">
        <router-link to = "/analytics" class="remove_decoration">Analytics
        </router-link>
      </el-menu-item>

      <el-menu-item index="4">
        <router-link to = "/report" class="remove_decoration">Report
        </router-link>
      </el-menu-item>

      <el-menu-item index="5">
        <router-link to = "/photos" class="remove_decoration">Photos
        </router-link>
      </el-menu-item>

      <el-menu-item index="6">
        <router-link to = "/videos" class="remove_decoration">Videos
        </router-link>
      </el-menu-item>

      <el-menu-item index="7" >
        <router-link to = "/login" class="remove_decoration">Login
        </router-link>
      </el-menu-item>

      <el-menu-item index="8" class="remove_decoration">
<!--        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>-->
      </el-menu-item>

    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
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
  .remove_decoration {
    text-decoration: none;
  }
</style>
