<template>
  <el-aside width="200px" style="background-color: #ffffff">
    <!--  -->
    <el-menu :default-openeds="['1', '3']">
      <el-menu-item :index="c.id" v-for="c in customers" @click="handleClick(c.id)" :key="c.id">{{ c.name }}</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      customers:this.$store.state.SData_Company[0].client
    }
  },
  methods:{
    handleClick:function(id){
      // 从数组中找出和当前选择的用户的id相同的元素
    let customer = null;
    for(let i in this.customers){
      if(this.customers[i].id === id){
        customer = this.customers[i];
        break;
      }
    }
    this.$store.commit('currentCustomer',customer)//将找出来的客户提交到state中
    console.log(this.$store.state.currentCustomer);
  }
  },
  created(){
    this.$store.state.currentCustomer=this.$store.state.SData_Company[0].client[0]
  }
  
}
</script>

<style></style>
