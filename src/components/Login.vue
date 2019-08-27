<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <p>login</p>
      </div>
    </el-col>

    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <el-button @click="visible = true"type="primary" plain>Button</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
