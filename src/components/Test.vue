<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ jeff }}</h1>
<!--    <h1>{{fred(mimi)}}</h1>-->
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    let na = 'mmm'
    return {
      msg: 'hah',
      jeff: this.fred(na)
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
