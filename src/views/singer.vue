<template> 
  <div class="singer">
    <IndexList :singers='singers'/>
  </div>
</template>

<script>
import getSingerList from '@/service/singer.js'
import IndexList from '@/components/base/index-list/IndexList.vue'

export default {
  name:'singer',
  data(){
    return{
      singers:[]
    }
  },
  components:{
    IndexList,
  },
  async created(){
    let result = await getSingerList()
    this.singers = result.singers
    console.log(result);
  }

}
</script>

<style lang='scss' scoped>

  .singer{
    position:fixed;
    width:100%;
    top:.88rem;
    bottom: 0;

  }

</style>
