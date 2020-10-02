<template>
  <div>
    <el-container>
      <el-header height="100px" style="line-height:50px;background-color:#7badfe;">
        <h2>聊天记录目录</h2>
      </el-header>
      
      
       <!-- <el-main> -->
        <el-container>
          <el-aside width="400px">
        <el-menu mode="vertical"
      v-for="item in this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].order"
      :key="item.id">
        <el-menu-item class="menu"><a>
          id:{{item.id}} 标题：{{item.title}} 创建时间：{{item.createTime}} 优先级：{{item.priority}} 
          </a></el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="background-color:whitesmoke">
        <ul
            v-for="item in this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].order[0].convers[0].msg"
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
      <el-footer height="160px" style="background-color:blue">

      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.lili{
  text-align: left;
  list-style: none;
}
</style>