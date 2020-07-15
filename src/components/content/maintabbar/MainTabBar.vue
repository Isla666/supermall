<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor ='deepPink'>
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div> 
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor ='deepPink'>
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
      <div slot="item-text">分类</div> 
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor ='deepPink'>
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="item-text">购物车</div> 
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor ='deepPink'>
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div> 
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  /* 刚开始抽取组件的时候:第一步：导入TabBar组件 */
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    /* 刚开始抽取组件的时候:第二步：注册TabBar组件 */
    // 已经抽取过组件然后再次抽取组件: 注册抽取过来的两个组件
    name:'MainTabBar',
    // 注册组件
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

<style scoped>

</style>