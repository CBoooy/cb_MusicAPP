<template>
  <div class="slider"
       ref='sliderWrapper'>
    <div class="slider-group">
      <div class="slider-page"
           v-for='item in sliders'
           :key='item.id'>
        <a :href="item.link">
          <img :src="item.pic">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  /* 注意：小写的vue， */
  import {
    ref
  } from "vue"
  import useSlider from './use-slider'

  export default {
    name: 'Slider',
    props: {
      sliders: {
        type: Array,
        default () {
          return []
        }
      }
    },
    setup() {
      /* 需要注意的一点是，setup执行时机在beforeCreate函数之前，因此也就不能 */
      /* 
        vue3如何通过ref属性获取界面上的元素?

        1 给元素添加个ref='sliderWrapper'
        2 在setup中，先创建一个响应式数据，let sliderWrapper = ref(null) 并且要把响应式数据sliderWrapper return 出去
        3 当元素被创建出来的时候，就会给对应的响应数据sliderWrapper赋值，此时sliderWrapper.value就有值了，这个值就是DOM。
        4 页面挂载完毕，就会执行onMounted()钩子函数，此时就可以利用生命周期方法，在onMounted()钩子函数中获取对应的响应式数据，即DOM元素
      */

      let sliderWrapper = ref(null)
      useSlider(sliderWrapper)

      return {
        sliderWrapper
      }
    }
  }
</script>

<style lang="scss"
       scoped>
  .slider {
    min-height: 1px;
    font-size: 0;
    touch-action: pan-y;

    .slider-group {
      position: relative;
      overflow: hidden;
      white-space: nowrap;

      .slider-page {
        display: inline-block;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;

        a {
          display: block;
          width: 100%;
        }

        img {
          display: block;
          width: 100%;
        }
      }
    }
 
  }
</style>
