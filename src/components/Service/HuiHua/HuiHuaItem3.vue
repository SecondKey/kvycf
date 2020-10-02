<template>
  <div class="HuiHuaItem3_box">
    <el-container class="HuiHua_container">
    <el-header class="HuiHua_header">
      <h2>客户信息</h2>
    </el-header>
    <el-main class="HuiHua_main" v-if="this.$store.state.currentCustomer">
      <ul class="HuiHua_ul">
        <li class="HuiHua_li" v-for="(value,key) in this.$store.state.currentCustomer"
       :key="key">{{key}}：{{value}}</li>
      </ul>
    </el-main>

  </el-container>
  <el-container class="HuiHua_container">
    <el-header class="HuiHua_header">
      <h2>工单信息</h2>
    </el-header>
    <el-main class="HuiHua_main" v-if="this.$store.state.currentOrder">
      <ul class="HuiHua_ul">
        <li class="HuiHua_li" v-for="(value,key) in this.$store.state.currentOrder" :key="key">{{key}}：{{value}}</li>
      </ul>
    </el-main>
    <el-footer class="HuiHua_footer">

    </el-footer>
  </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      kehu:{
        id: 0, //k客户编号
        name: '客户', //客户名称
        tel: '13912345670', //手机
        email: '12345678@qq.com', //邮箱
        position: '北京市', //地址
        rate: 10, //信誉评级
        visitTime: '2020.9.28', //访问时间
      },
      gongdan:{
        id: 0, //工单id
        title: '手机维修', //工单标题
        state: false, //工单状态，工单是否已经完成
        client: 1, //发起工单的客户的id
        category: 0, //分类
        priority: 3, //优先级
        createTime: '2019.12.05', //创建时间
      }
    }
  }

}
</script>

<style>
  .HuiHua_container{
    background-color: whitesmoke;
    height: 50%;
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