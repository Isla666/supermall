<template>
    <swiper v-if="banners.length">
      <swiper-item v-for="(item, index) in banners" :key="index"> 
        <a :href="item.link">
          <img :src="item.image" alt=""/>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  // 引入swiper
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default{
    name:"HomeSwiper",
    // 需要拿到父组件里面的数据
    props: {
      banners: {
        type: Array,
        default(){
          return[]
        }
      },
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>