<template>
  <div class="hello">
    deafult

    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element {{jeff}}</p>
    </el-dialog>

  </div>
</template>

<script>


export default {

  data () {
    let na = 'mmm'
    return {
      msg: 'hah',
      jeff: this.fred(na),
      visible: false
    }
  },

  methods: {
    fred(x) {
      let j = 'fala ' + x;
       return j
    }

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
