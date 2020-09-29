<template>
  <el-container class="HuiHuaItem2_container">
    <el-header class="HuiHuaItem2_header">
      <h2>王二</h2>
    </el-header>
    <el-main class="HuiHuaItem2_main">
       <el-table class="HuiHuaItem2_table" :data="tableData" :show-header="false">

      <el-table-column label="客户" prop="customer"></el-table-column>

      <!-- <el-table-column label="时间" prop="date"></el-table-column> -->

      <el-table-column label="客服" prop="servise" align="right"></el-table-column>

    </el-table>
    </el-main>
    <el-footer class="HuiHuaItem2_footer">
      <el-input></el-input>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
        return {
          tableData: [{
            date: '2016-05-02',
            customer: '你好,我的手机坏了，开不开了',
            servise: ' '
          },
          {
            date: '2016-05-02',
            customer: ' ',
            servise: '你好，请提交机型，并描述在发生故障前的情况'
          }]
        }
}
}
</script>

<style>
.HuiHuaItem2_container{
  background-color: gainsboro!important;
}
.HuiHuaItem2_header{
  background-color:white;
  color: #000;
}
.HuiHuaItem2_main{
  background-color:  rgb(233, 233, 233);
}
.HuiHuaItem2_table{

}
.HuiHuaItem2_footer{

}
.HuiHuaItem_tabel_sevise{
  /* text-align: right; */
}
</style>