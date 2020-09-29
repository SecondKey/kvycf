<template>
  <div><template>
  <el-table
    :data="tableData"
    height="250"
    border style="width: 100%">
    <el-table-column
      prop="date"
      label="通知"
      width="180"
      header-align="center">
    </el-table-column>
  </el-table>
</template></div>
</template>

<script>
export default {
     data() {
      return {
        tableData: [{
          date: '2016-05-03',
        }, {
          date: '2016-05-02',
        }, {
          date: '2016-05-04',
        }, {
          date: '2016-05-01',
        }, {
          date: '2016-05-08',
        }, {
          date: '2016-05-06',
        }, {
          date: '2016-05-07',
        }]
      }
    }
}
</script>

<style>
.el-table td{
  text-indent: 2em;
  } 
</style>