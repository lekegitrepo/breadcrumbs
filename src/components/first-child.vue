<template>
  <div>
    <h1>First Child page!</h1>
    <router-link :to="{name: 'Second'}"> Start Breadcrumbs</router-link>
  </div>
</template>

<script>
export default {
  name: 'First',
}
</script>
