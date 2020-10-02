<template>
  <el-aside width="300px" style="background-color: #ffffff">

    <!--  -->
      <el-menu :default-openeds="['1']">
            <el-menu-item index="1-1" @click="handleClick(0)">全部工单</el-menu-item>
            <el-menu-item index="1-2" @click="handleClick(0)">待处理的</el-menu-item>
            <el-menu-item index="1-3" @click="handleClick(1)">处理中工单</el-menu-item>
            <el-menu-item index="1-4" @click="handleClick(2)">已解决工单</el-menu-item>
          </el-menu>
    </el-aside>
</template>

<script>
export default {
   data() {
    return {
      Order_Lists:this.$store.state.SData_Company[0].order
    }
  },

methods:{
    handleClick:function(state){
      // 从数组中找出和当前选择的用户的Order_List相同的元素
    let Order_List = null;
    for(let i in this.Order_Lists){
      if(this.Order_Lists[i].state >= state){
        Order_List = this.Order_Lists[i];
        this.$store.commit('currentOrder_List',Order_List)//将找出来的客户提交到state中
    console.log(this.$store.state.currentOrder_List);
        }
        if(i>7)
        break;
    }
    
  }
  },
  // created(){
  //   this.$store.state.currentCustomer=this.$store.state.SData_Company[0].client[0]
  // }

}
</script>

<style>
</style>