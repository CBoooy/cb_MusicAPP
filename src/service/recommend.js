import get from '@/service/base.js'

  /* 通过这个函数，拿到轮播图和歌单的数据。也就是推荐页需要的数据 */
export function getRecommend () {
  return get('/api/getRecommend')
}
