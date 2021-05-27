<template>
  <div class="hello">
    <h1>Home page!</h1>
    <p>{{msg}}</p>
    <router-link :to="{name: 'First'}"> Start Breadcrumbs</router-link>
    <!-- <router-link :to="{name: 'Second'}"> Go to Second</router-link>
    <router-link :to="{name: 'Third'}"> Go to Third</router-link>
    <router-link :to="{name: 'Fourth'}"> Go to Fourth</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
