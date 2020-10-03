<template>
<div class="panel customer-monitor">
      <div class="title1">未处理工单</div>
      <el-table :data="this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany]
        .order" border style="width:100%" >
        <el-table-column fixed prop="id" label="工单ID" width="150" align="center"> </el-table-column>
      <el-table-column prop="title" label="工单标题" width="150" align="center"> </el-table-column>
      <el-table-column prop="client" label="客户ID" width="150" align="center"> </el-table-column>
      <el-table-column prop="category" label="分类" width="150" align="center"> </el-table-column>
      <el-table-column prop="priority" label="优先级" width="150" align="center"> </el-table-column>
       <el-table-column prop="createTime" label="创建时间" width="150" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150" >
        <el-button type="text"  style="float:left">查看详情</el-button>
        <el-button type="text"  style="float:left">接单</el-button>
      </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .title1{
  font-size: 20px;
  margin-bottom: 47px;
  font-weight: 600;

}
.el-table{
  top:-40px;
  height: 300px;
} 
::v-deep.el-table th > .cell {
      text-align: center;

    }
::v-deep.el-table .cell {
      text-align: center;

    }
</style>