<template>
  <div class="indexList">
    <ul ref='groupRef'>
      <li class="group"
          v-for='item in singers'
          :key='item.title'
          >

        <h2 class="title">{{item.title}}</h2>
        <ul>
          <li 
            class="item"
            v-for='item2 in item.list'
            :key='item2.id'
          >
            <img :src="item2.pic" class="avatar">
            <p class="name">{{item2.name}}</p>
          
          </li>
        </ul>
      </li>
    </ul>

    <div class="shortCut">
      <ul>
        <li
          v-for='(item,index) in singers'
          :key='index'
          class="shortItem"
        >{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import useFiexed from './use-fixed.js' 
  export default {
    name: 'IndexList',
    props: {
      singers: {
        type: Array,
        default () {
          return []
        }
      }
    },
    setup(){
      let {groupRef} = useFiexed() 
      return{
        groupRef
      }
    }
  }
</script>

<style lang='scss' scoped>

  .indexList{
    position: relative;
    width:100%;
    height: 100%;
    overflow:scroll;

    .group{
      padding-bottom: .3rem;

      .title{
        font-size:$font-size-small ;
        color:$color-text-l;
        padding-left:.2rem;
        background-color:$color-highlight-background;
        line-height:.3rem; 
      }

      .item{
        display: flex;
        align-items: center;
        padding: .2rem 0 0 .3rem ;

        img{
          display: block;
          width:.5rem;
          height:.5rem;
          border-radius:50% 50%;
        }
        p{
          font-size: $font-size-medium;
          color:$color-text-l;
          margin-left: .2rem;
        }
      }
    }
    .shortCut{
      position:fixed;
      right:.04rem;
      top:50%;
      margin-top:-50%;
      font-size: $font-size-small;
      color:$color-text-l;
      text-align: center;
      padding: .2rem 0 ;

      .shortItem{
        padding:.03rem;
      }
    }
  }


</style>
