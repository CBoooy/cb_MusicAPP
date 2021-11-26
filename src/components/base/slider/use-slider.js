import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)

import { onMounted , onUnmounted ,ref} from 'vue'

export default function useSlider (wrapperDom) {
  let slider = ref(null)

  onMounted(() => {

    slider.value = new BScroll(wrapperDom.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide:true
    })
  })

  onUnmounted(() => {
    slider.value.destroy()
  })

  return slider
}
