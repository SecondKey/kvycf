<template>
  <div><template>
  <el-table
    :data="tableData"
    height="445"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="通知"
      width="350"
      header-align="center">
      <el-table-column
          prop="title"
          label="标题"
          width="190"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间"
          width="189"
          align="center"
          >
        </el-table-column>
    </el-table-column>
  </el-table>
</template></div>
</template>
<script>
export default {
     data() {
      return {
        tableData: [{
          title: '凯文云高校特惠，助力学生创业梦！',
          time:'2020-10-02',
        }, {
          title: '0元体验，快速入门云计算！',
          time:'2020-10-01'
        }, {
          title: 'WCT-24新品上线！',
          time:'2020-09-30',
        }, {
          title: '云客服最新规章制度已发布！',
          time:'2020-09-29'
        }, {
          title: '注册云客服,即可获得姜子牙门票一张！',
          time:'2020-09-28'
        }, {
          title:'云客服2.0版本已上架，欢迎大家更新下载！',
          time:'2020-09-27'
        }, {
          title:'双节即将到来，举国同庆！',
          time:'2020-09-26'
        }],
      }
    }
}
</script>

<style>

</style>