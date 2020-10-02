<template>
<div class="panel customer-monitor">
      <div class="title1">客服监控</div>
      <el-table :data="tableData" border style="width:100%" >
        <el-table-column prop="name" label="客服昵称" width="160">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="160"> 
          <template slot-scope="scope">
        <div :class="{online:scope.row.status=='在线'}">{{scope.row.status}}</div>
        </template>
        </el-table-column>
        <el-table-column prop="duration" label="在线时长" width="160">
        </el-table-column>
        <el-table-column prop="sessionCount" label="会话数" width="160">
        </el-table-column>
        <el-table-column prop="msgCount" label="消息数" width="158">
        </el-table-column>
        <el-table-column prop="msgCount" label="平均响应时长" width="150">
        </el-table-column>
        <el-table-column prop="msgCount" label="平均会话时长" width="150">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      tableData: [
        {
          name: '客服小美',
          status: '在线',
          duration: '6h',
          sessionCount: '30',
          msgCount:'389',
          respondtime:'24s',
          conversation:'5min',
        } ,
         {
          name: '客服小美',
          status: '在线',
          duration: '6h',
          sessionCount: '30',
          msgCount:'389',
          respondtime:'24s',
          conversation:'5min',
        } ,
         {
          name: '客服小美',
          status: '在线',
          duration: '6h',
          sessionCount: '30',
          msgCount:'389',
          respondtime:'24s',
          conversation:'5min',
        } ,
         {
          name: '客服小美',
          status: '在线',
          duration: '6h',
          sessionCount: '30',
          msgCount:'389',
          respondtime:'24s',
          conversation:'5min',
        } ,
         {
          name: '客服小美',
          status: '在线',
          duration: '6h',
          sessionCount: '30',
          msgCount:'389',
          respondtime:'24s',
          conversation:'5min',
        } ,
        
      ],
    }
  }
}
</script>

<style scoped>
 .title1{
  font-size: 18px;
  margin-bottom: 47px;

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