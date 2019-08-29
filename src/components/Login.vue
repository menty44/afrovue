<template>

  <el-row>

    <el-col :span="12">
      <div class="grid-content bg-purple">
<!--        <img src="../assets/logo.png">-->
        <img src="../assets/afrocover2.jpg" height="60%" width="70%">
        <div class="imagecontainer"></div>
      </div>
    </el-col>

    <el-col :span="12">

      <span style="color: #409EFF; padding-top: 20%"><h1>{{form.title}}</h1></span>

      <el-form ref="form" :model="form" label-width="120px" style="padding-top: 40%">

        <div class="grid-content bg-purple-light">

          <el-form-item label="Username">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="Email">
            <el-input v-model="form.email" class="full_width"></el-input>
          </el-form-item>

          <el-col :span="24">
            <el-button @click="visible = true" type="primary" plain>Login to the Website</el-button>
          </el-col>

        </div>

      </el-form>
      <el-form ref="form" :model="form" label-width="120px" style="padding-top: 12%">
        <el-button v-on:click="reroute" style="color:red;">Forgot Password? click here to reset it
        </el-button>
        <p></p>
      </el-form>

      <span style="padding-top: 20%">
            <small> © Developed by Blaqueyard Solutions</small>
          </span>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          title: 'Login Page',
          email: "",
          password: ""
        },

      }
    },
    methods: {
      reroute: function () {
        this.$router.push('/resetpassword');
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .full_width {
    width: 100%;
  }
  .imagecontainer {

    background: url("../assets/afrocover2.jpg") no-repeat;
    background-size:contain;

  }</style>

