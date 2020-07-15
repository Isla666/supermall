<template>
  <!-- App.vue里面存放了4个item,但是我们内容肯定是不一样的，所以这时我们就需要具名插槽 -->
  <div class="tab-bar-item" @click="itemClick">
    <!-- 通常插槽里面的内容会被替换掉，所以我们在做判断的时候一般都会给插槽外层添加一层div,
    用来嵌套属性，这样属性就不会被写在App.vue里面的插槽的内容所替换掉 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 由于color需要改成动态传入的颜色,所以按照下方动态添加style方式修改 -->
    <!-- <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div> -->
    <!-- 动态绑定style -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt />
    <div>首页</div> -->
  </div>
</template>
  
<script>
  export default {
    name: "TabBarItem",
    props: {
      path:String,
      // 这里搞一个动态color属性
      activeColor:{
        type:String,
        // 给一个默认颜色
        default:'red'
      }
    },
    data() {
      return {
        // 如何让这个属性变成动态，可以添加coumputed属性
        // isActive: true
      }
    },
    computed:{
      // 为什么这个里面是个函数，因为这里省略了getter和setter方法,
      // 本来这里应该是个setter，但是setter一般不写，所以这里就是是一个函数了
      isActive(){
        // 解析：哪个路由活跃就拿哪个路由的path
        // return this.$route.path
        // 如果这个活跃路由包含我当前这个路由，两个路由一致就可以是高亮状态
        // /home -> item1(/home) = true
        // /home -> item1(/category) = flase
        // /home -> item1(/cart) = flase
        // /home -> item1(/profile) = flase
        return this.$route.path.indexOf(this.path) !== -1
      },
      // 动态绑定style
      activeStyle(){
        // 解析: 三目运算符
        // "?"如果this.isActive是活跃的,那么就给color添加动态熟悉activeColor,
        // ":"否则给一个空对象
        return this.isActive ? {color:this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        // replace 返回按钮无效
        this.$router.replace(this.path)
        /* this.$router.push()  返回按钮有效*/ 
      },
    },
  };
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  /* 颜色也应该是动态的，不应该写死，别人拿到代码可以随意修改成自己需要的 */
  .active{
    color: red;
  }
</style>