<template>
  <div>
    <h1>Fourth Child page!</h1>
    <router-link :to="{name: 'First'}"> Start Breadcrumbs</router-link>
    <router-link :to="{name: 'Second'}"> Go to Second</router-link>
    <router-link :to="{name: 'Third'}"> Go to Third</router-link>
    <router-link :to="{name: 'Fourth'}"> Go to Fourth</router-link>
  </div>
</template>

<script>
export default {
  name: 'Fourth',
}
</script>
