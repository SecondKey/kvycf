<template>
  <el-aside width="300px" style="background-color: cornflowerblue">
    <el-container>
      <el-header style="background-color: cornflowerblue;"></el-header>
      <el-main style="background-color: #ffffff">
    <!--  -->
      <el-menu :default-openeds="['1']">
            <el-menu-item index="1-1" @click="handleClick_all(0)">全部工单</el-menu-item>
            <el-menu-item index="1-2" @click="handleClick(0)">待处理工单</el-menu-item>
            <el-menu-item index="1-3" @click="handleClick(1)">处理中工单</el-menu-item>
            <el-menu-item index="1-4" @click="handleClick(2)">已解决工单</el-menu-item>
          </el-menu>
      </el-main>
      <el-footer style="background-color: #ffffff"></el-footer>
    </el-container>
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
    handleClick_all:function(state){
      // 从数组中找出和当前选择的用户的Order_List相同的元素
    this.$store.state.currentOrder_List.length=0
    let Order_List = null;
    for(let i in this.Order_Lists){
      if(this.Order_Lists[i].state >= state){
        Order_List = this.Order_Lists[i];
        // this.$store.commit('currentOrder_List',Order_List)//将找出来的客户提交到state中
        this.$store.state.currentOrder_List.push(Order_List)
    console.log(this.$store.state.currentOrder_List);
        }
        if(i>7)
        break;
    }
    
  },
  handleClick:function(state){
    this.$store.state.currentOrder_List.length=0
      // 从数组中找出和当前选择的用户的Order_List相同的元素
    let Order_List = null;
    for(let i in this.Order_Lists){
      if(this.Order_Lists[i].state === state){
        Order_List = this.Order_Lists[i];
        // this.$store.commit('currentOrder_List',Order_List)//将找出来的客户提交到state中
        this.$store.state.currentOrder_List.push(Order_List)
    console.log(this.$store.state.currentOrder_List);
        }
        if(i>7)
        break;
    }
    
  },
  // handleClick:function(state){
  //     // 从数组中找出和当前选择的用户的Order_List相同的元素
  //   let Order_List = null;
  //   for(let i in this.Order_Lists){
  //     if(this.Order_Lists[i].state === state){
  //       Order_List = this.Order_Lists[i];
  //       this.$store.commit('currentOrder_List',Order_List)//将找出来的客户提交到state中
  //   console.log(this.$store.state.currentOrder_List);
  //       }
  //       if(i>7)
  //       break;
  //   }
    
  // },
  },
  
}
</script>

<style scoped>
.el-menu-item{
   margin-top:20px;
   font-size:18px!important;
   font-weight: normal;
}
</style>