<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 要滚动的内容都放到scroll里面 -->
    <scroll class="content" ref="scroll">
      <!-- 用来替换插槽 -->
      <!-- 使用HomeSwiper组件 通过自定义属性把banners的值传给子组件-->
      <home-swiper :banners="banners" />
      <recommentd-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                  :titles="['流行', '新款', '精选']"  
                  @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>

// 导入HomeSwiper模块
import HomeSwiper from './childCopms/HomeSwiper';
// 导入RecommentdVieww组件
import RecommentdView from './childCopms/RecommendView'
// 导入最新流行
import FeatureView from './childCopms/FeatureView'

// 导入NavBar模块
import NavBar from 'components/common/navbar/NavBar';
// 导入TabControl组件
import TabControl from 'components/content/tabcontrol/TabControl';
// 导入商品列表大组件
import GoodsList from 'components/content/goods/GoodsList'
// 导入Scroll组件
import Scroll from 'components/content/scroll/Scroll'
// 导入返回顶部组件
import BackTop from 'components/content/backtop/BackTop'

// 引入home.js里面的请求方法
import { getHomeMultidata,getHomeGoods } from "network/home";


export default {
  name:"Home",
  components: {
      // 注册HomeSwiper组件
      HomeSwiper,
      // 注册RecommentdView组件
      RecommentdView,
      // 注册FeatureViwe组件
      FeatureView,
      // 注册头部导航
      NavBar,
      // 注册TabControl组件
      TabControl,
      // 注册商品列表组件
      GoodsList,
      // 注册滚动组件
      Scroll,
      // 注册返回顶部组件
      BackTop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      // 存放流行/精选/新品
      // 为了用户体验更好，所以最好一次性把数据拿过来存放在这里。因为是三大项内容，并且每项内容都不一样
      // 所以分别建立三个对象存放具体内容，并且把初始页码也存上
      // 接下来去home.js里面写网络请求
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      // 定义变量用来存储选中了谁，默认选中的‘流行’
      currentType:'pop'
    }
  },
  // 组件创建完成之后开始发送网络请求
  created(){
    // 调用请求多个数据方法
    this.getHomeMultidata();
    // 调用请求商品方法
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed:{
    // 通过计算属性显示在行间标签更简洁
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  // 一般在vue组件创建完的created()里面我们都是执行一些简单方法，
  // 具体的逻辑方法我们都写在methods方法里面
  methods: {
    /* 
    *
    *事件监听相关的方法
    */
   tabClick(index){
    //  通过case选项，控制currentType是谁，上面就可以动态获取对应选中的值
    switch (index) {
      case 0:
         this.currentType = 'pop'
      break;
      case 1:
        this.currentType = 'new'
      break;
      case 2:
        this.currentType = 'sell'
        // 防止事件穿透default,需要加default,如果下面没有defult的话，最后一个break可以不用写
     }
   },
   backClick(){
     console.log(111111)
     this.$refs.scroll.scrollTo(0,0,500)
   },



    /* 
    *
    *网络请求相关的
    */
    // 1.请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // // this.result = res;
        // 由于js的垃圾回收机制res在函数执行完后会被销毁，所以我们要在数据销毁之前
        // 在外部把数据存储下来
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // 请求商品数据方法
    getHomeGoods(type){
      // 由于用户每次上拉刷新都会请求一页新的数据，所以我们的type和page
      // 都应该是动态的，所以我们定义变量，拿到page,加1是因为初始化的时候是0，每次翻页都得加1
      // 才能看到新一页数据
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 拿到相应选中标签的数据，并且要把数据存储到data里面对应的相应的list里面，
        // “...”原理是会对数据进行一个个解析，然后追加到数组里面，或者这里也可以用
        // for循环遍历数据，并且push到新数据里面
        this.goods[type].list.push(...res.data.list);
        // console.log(this.goods[type].list)
        // console.log(JSON.stringify(this.goods[type].list))
        // 展示相应页码的数据
        this.goods[type].page += 1
      })

    }
    


  },
  
}
</script>
<style scoped>
#home{
  padding-top: 44px;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* 吸顶效果 */
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content{
  position: absolute;
  top:44px;
  left: 0;
  right:0;
  bottom: 44px;
}
</style>
