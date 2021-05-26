<template>
  <div>
    <h1>Second Child page!</h1>
    <router-link :to="{name: 'First'}"> Start Breadcrumbs</router-link>
    <router-link :to="{name: 'Third'}"> Go to Third</router-link>
  </div>
</template>

<script>
export default {
  name: 'Second',
}
</script>
