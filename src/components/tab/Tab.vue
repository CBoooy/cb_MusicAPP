<template>
  <div class="tab">
    <router-link class="tab-item"
                 v-for="item in tabItems"
                 :key="item.path"
                 :to="item.path">
      <span class="tab-link">{{item.name}}</span>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'Tab',
    data() {
      return {
        tabItems: [{
            name: '推荐',
            path: '/recommend'
          },
          {
            name: '歌手',
            path: '/singer'
          },
          {
            name: '排行',
            path: '/top-list'
          },
          {
            name: '搜索',
            path: '/search'
          }
        ]
      }
    }
  }
</script>

<style lang='scss'
       scoped>
  .tab {
    display: flex;
    height: .44rem;
    line-height: .44rem;
    font-size: $font-size-medium;
    background-color: $color-background;

    .tab-item {
      flex-grow: 1;
      text-align: center;
 

      &.router-link-active {

        .tab-link{ 
        color: $color-theme; 
        }
      }
    }


  }
</style>
