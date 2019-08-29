<template>
  <div class="hello">
    <el-row>

      <el-col :span="12">
        <div class="grid-content bg-purple" style="padding-top: 10%">
          <!--        <img src="../assets/logo.png">-->
          <img src="../assets/undraw_server_down_s4lk.svg" height="60%" width="70%" v-if="!form.complete">
          <img src="../assets/undraw_completed_ngx6.svg" height="60%" width="70%" v-if="form.complete === true">
          <div class="imagecontainer"></div>
        </div>
      </el-col>

      <el-col :span="12">

        <span style="color: #409EFF; padding-top: 20%"><h1>{{form.title}}</h1></span>

        <el-form ref="form" :model="form" label-width="120px" style="padding-top: 10%">

          <div class="grid-content bg-purple-light" v-if="!form.complete">

            <el-form-item label="Email">
              <el-input v-model="form.email" class="full_width"></el-input>
            </el-form-item>

            <el-col :span="24">
              <el-button @click="reset(form.email)" type="primary" plain v-if="form.email.length >= 1">Reset Password</el-button>
            </el-col>

          </div>

          <div class="grid-content bg-purple-light" v-if="form.complete ===  true">

            <el-alert
              title="Password has been reset successfully, Please check your email for new password"
              type="success">
            </el-alert>

          </div>

        </el-form>

      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {

  data () {
    let na = 'mmm'
    return {
      form:{
        msg: 'hah',
        jeff: this.fred(na),
        email: '',
        title: 'Reset Password',
        complete: false,
      }
    }
  },

  components: {
  },

  methods: {
    fred(x) {
      let j = 'fala ' + x;
       return j
    },
    reset: function (x) {
      console.log(x)
      // alert('hey ' + x)
      let status = this.form.complete = true;
      if (status === true){
        this.$notify({
          title: 'Success',
          message: 'Password has been Reset Successfully',
          type: 'success'
        });
        return status;
      }else {
        this.$notify.error({
          message: 'There was an error',
          title: 'Error'

        });
      }
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
