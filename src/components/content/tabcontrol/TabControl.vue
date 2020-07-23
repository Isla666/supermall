<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles" class="tab-control-item" 
            :class="{active:index===currentIndex}" 
            :key="item.id"
            @click="itemClick(index)"
            >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {

    },
    data() {
        return {
            currentIndex:0
        };
    },
    watch: {

    },
    methods: {
        itemClick(index){
            this.currentIndex = index;
            // 把选中的index传到Home.vue里面，通过$emit向父元素发送自定义事件，把数据传递过去
            this.$emit('tabClick',index);
        }
    },
    mounted() {

    },
};
</script>

<style scoped>
.tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 2px solid var(--color-tint);;
}
</style>
