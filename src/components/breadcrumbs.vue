<template>
  <div class="breadcrumb">
    <ul>
      <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        :class="{'linked': !!breadcrumb.link}">

        <span class="divider" :class="{'hide': idx === breadcrumbList.length || idx === 0}"> / </span> {{ breadcrumb.name }}

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () {
      console.log('This is breadcrumb routes ', this.$route.meta.breadcrumb)
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
    // [
    //   { image_url: 'https://www.linkpicture.com/q/Image-5.png' },
    //   { image_url: 'https://www.linkpicture.com/q/Image-1_1.png' },
    //   { image_url: 'https://www.linkpicture.com/q/Image-2_1.png' },
    //   { image_url: 'https://www.linkpicture.com/q/Image-3_2.png' },
    // ]
  }
}
</script>

<style scoped>
  .breadcrumb {}
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul > li {
    display: flex;
    float: left;
    height: 10px;
    width: auto;
    color: $default;
    font-weight: bold;
    font-size: .8em;
    cursor: default;
    align-items: center;
  }
  ul > li:not(:last-child)::after {
    float: right;
    font-size: .8em;
    margin: 0 .5em;
    color: $light-default;
    cursor: default;
  }
  .linked {
    cursor: pointer;
    font-size: 1em;
    font-weight: normal;
  }
  .divider {
    padding: 0 5px;
  }
  .hide {
    display: none;
  }
</style>
