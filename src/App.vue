<template>
  <div id="app">
    <!-- 根路由出口 -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}

</style>
