<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
        <!-- 这里写v-if的目的是：如果sliders数组中没有数据，则不渲染这个组件。有了数据之后才会渲染 -->
        <Slider v-if='sliders.length'
                :sliders='sliders' />
      </div>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐列表</h1>
      <ul>
        <li class="item"
            v-for='item in albums'
            :key='item.id'>
          <div class="icon">
            <img :src="item.pic">
          </div>
          <div class="text">
            <h2 class="name">{{item.username}}</h2>
            <p class="title">{{item.title}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    getRecommend
  } from '@/service/recommend.js'
  import Slider from '@/components/base/slider/Slider.vue'

  export default {
    name: 'recommend',
    data() {
      return {
        sliders: [],
        albums: []
      }
    },
    async created() {
      let result = await getRecommend() 
      this.sliders = result.sliders
      this.albums = result.albums
    },
    components: {
      Slider
    }
  }
</script>

<style lang="scss"
       scoped>
  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    overflow: scroll;

    .recommend-content {
      height: 100%;
      overflow: hidden;

      .slider-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;

        .slider-content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }


    }

    .recommend-list {
      background-color: $color-background;
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;

          img{
            display: block;
            width: 0.6rem;
            height:.6rem;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }

        .name {
          margin-bottom: 10px;
          color: $color-text;
        }

        .title {
          color: $color-text-d;
        }
      }
    }


  }
</style>
