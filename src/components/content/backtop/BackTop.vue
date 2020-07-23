<template>
    <div class="backTop" @click="backClick">
        <img src="~assets/img/common/top.png" alt="" />
    </div>
</template>

<script>
export default {
    name:"BckTop",
    props: {

    },
    components: {

    },
    data() {
        return {

        };
    },
    watch: {

    },
    methods: {
      /* 由于把方法写在这个里面还需要通过$emit将方法传出去，比较麻烦 */
      backClick(){
        this.$emit('backClick')
      }
    },
    mounted() {

    },
};
</script>

<style scoped>
.backTop{
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 10;
}
.backTop img{
  width: 50px;
  height: 50px;
}
</style>
