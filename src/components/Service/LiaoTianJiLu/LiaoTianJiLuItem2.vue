<template>
  <div>
    <el-container style="box-shadow:2px 2px 6px #000;">
      <el-header height="100px" style="line-height:50px;background-color:#7badfe;">
        <h2>聊天记录</h2>
      </el-header>
      
      
       <!-- <el-main> -->
        <el-container>
          <el-aside width="400px">
        <el-menu mode="vertical"
      v-for="item in this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].order" 
      :key="item.id" >
        <el-menu-item class="menu" ><a @click="handleClick(item.id)">
          id:{{item.id}} 标题：{{item.title}} 创建时间：{{item.createTime}} 优先级：{{item.priority}} 
          </a></el-menu-item>
        </el-menu>
      </el-aside >
      <el-main style="background-color:whitesmoke"   v-if="this.$store.state.currentOrder">
        <ul
            v-for="item in this.$store.state.currentOrder.convers[0].msg"
            :key="item.id">
          <li class="lili">
            {{item.owner}},{{item.time}}:
          </li>
          <li class="lili">
            {{item.contant}}
          </li>
          </ul> 
      </el-main>
        </el-container>
        <!-- </el-main>  -->
      <el-footer height="160px" class="jilufooter">
        <div></div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order_msgs:this.$store.state.SData_Company[0].order
    }
  },
methods: {
   handleClick:function(id){
      // 从数组中找出和当前选择的用户的id相同的元素
    let order_msg = null;
    for(let i in this.order_msgs){
      if(this.order_msgs[i].id === id){
        order_msg = this.order_msgs[i];
        break;
      }  
    }
    this.$store.commit('currentOrder',order_msg)//将找出来的客户提交到state中
    console.log(this.$store.state.currentOrder);
  },
  created(){
    this.$store.state.currentOrder=this.$store.state.SData_Company[0].order[0]
  }
}
}
</script>

<style>
.lili{
  text-align: left;
  list-style: none;
}
.jilufooter{
  
  background-image:url(../../../img/footer.jpg);
}
</style>