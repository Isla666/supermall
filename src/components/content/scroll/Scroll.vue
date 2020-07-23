<template>
    <!-- 这里为了对wrapper做处理所以也需要包裹一层wrapper和content -->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>  
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    data() {
      return {
        scroll:null
      };
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      }
    },
    /* Dom对象被挂载完成之后执行这个函数 */
    mounted() {
      // 正常应该这么获取document.querySelector('.wrapper')，但是为了保证拿到的class的唯一性，这里需要用ref,
      // ref如果绑定在组件中，那么通过this.$refs.ref的名字 获取到的是一个组件对象
      // ref如果是绑定在普通元素上，那么通过this.$refs.refname获取到的是一个元素对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:3
      })
    },
};
</script>

<style scoped>

</style>
