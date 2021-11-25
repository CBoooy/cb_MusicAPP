<template>
  <MyHeader/>
  <Tab/>
  <router-view/>
</template>

<script>
import MyHeader from '@/components/header/MyHeader.vue'
import Tab from '@/components/tab/Tab.vue'
export default {
  components: {
    MyHeader,
    Tab,
  }
}
</script>

<style lang="scss">
</style>
