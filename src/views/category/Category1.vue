<template>
<div class="wrapper">
  <ul class="content">
    <li v-for="item in list" :key="item.id">
      <span>{{item.title}}</span>
      <div>
       
        <button @click="edit(item)">修改</button>
        <button @click="del(item)">删除</button>
      </div>
    </li>
     <button @click="add">添加</button>
  </ul>
  
</div>
</template>

<script>
import BSscroll from 'better-scroll';
import axios from 'axios';
import {getGoods,addGoods,editGoods,delGoods} from "network/home";
export default {
  name:"Category",
  data(){
    return{
      scroll:null,
      list:[]
    }
  },
  // 组件创建完成之后调用
  created(){

  },
  //所有组件dom对象已经挂载完成
  mounted(){
    this.scroll = new BSscroll(document.querySelector('.wrapper'),{

    })
    this.getCategory()
  },
  methods:{
    getCategory(){
      getGoods().then(res=>{
        console.log(res)
        this.list = res.slice(0)
      })
    },
    add(){
      let params ={
       
        title:'手表'
      }
      // Content-Type: applicatsion/json;charset=UTF-8
      // Content-Type: application/json; charset=utf-8
       /* axios.post(`http://localhost:53000/goods`,params).then(res=>{
          alert('添加成功')
          this.getCategory()
       }) */
      addGoods(params).then(res=>{
        // if(res.status===200){
          alert('添加成功')
          this.getCategory()
        // }
      })
    },
    del(item){
      /* let id = item.id
      axios.delete(`http://localhost:53000/goods/${id}`).then(res=>{
        // if(res.status===200){
          alert('删除成功')
          this.getCategory()
        // }
      }) */
      let params = {
        id:item.id
      }
      delGoods(params).then(res=>{
        alert('删除成功')
        this.getCategory()
      })
    },
    edit(item){
      // let id = item.id
      /* axios.put(`http://localhost:53000/goods/${id}`,{
        title:"111"
      }).then(res=>{
        // if(res.status===200){
          alert('修改成功')
          this.getCategory()
        // }
      }) */
      let params = {
        id:item.id
      }
      let data = {
        title:'22222'
      }
      editGoods(params,data).then(res=>{
        alert('修改成功')
        this.getCategory()
      })
    }
  }
}
</script>
<style scoped>
.wrapper{
  /* height: 200px; */
  background-color: yellow;
  overflow: hidden;
  /* 下面是原生的实现滚动效果 */
  /* overflow-y: scroll; */
}
</style>
