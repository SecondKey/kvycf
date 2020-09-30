<template>
  <el-container class="HuiHua_container">
    <el-header class="HuiHua_header">
      <h2>{{kehu.name}}</h2>
    </el-header>
    <el-main class="HuiHua_main">
      <h1>客户信息</h1>
      <ul class="HuiHua_ul">
        <li class="HuiHua_li" v-for="(value,key) in kehu" :key="key">{{key}}：{{value}}</li>
      </ul>
    </el-main>
    <el-footer class="HuiHua_footer">

    </el-footer>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      kehu:{
        adress:'198.128.255.0',
        name:'王二',
        tel:'13855112270',
        email:'1725433499@qq.com',
        rate:1,
        time:'2020-9-30 20:50:58'
      }
    }
  }

}
</script>

<style>
  .HuiHua_container{
    background-color: whitesmoke;
  }
  .HuiHua_header{
    background-color: white;

  }
  .HuiHua_main{
    background-color: whitesmoke;

  }
  .HuiHua_footer{
    background-color: white;
  }
  .HuiHua_li{
    text-align: left;
    list-style-type: none;
    margin-bottom: 15px;
  }
  .HuiHua_ul{
    padding: 0;
  }
</style>