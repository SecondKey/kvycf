<template>
  <div class="containedDiv">
    <div class="ShouYe-count-box">
      <div class="ShouYe-count-item" v-for="item in navItems" :key="item.title">
        <div class="ShouYe-title">{{ item.title }}</div>
        <div class="ShouYe-count">{{ item.count }}</div>
        <div class="ShouYe-perc">较昨日上涨{{ item.perc }}</div>
      </div>
    </div>

    <div class="ShouYe-zhong">
      <ShouYeTuBiao class="ShouYe-zujian"> </ShouYeTuBiao>

      <div class="ShouYe-tongzhi">
        <h4 class="ShouYe-h4">通知</h4>
        <hr />
        <table>
          <thead style="display:none;">
            <tr>
              <th class="ShouYe-th">公告</th>
              <th class="ShouYe-th">时间</th>
            </tr>
            <br />
          </thead>
          <tbody>
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2020/10/3 上午10:00:14</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2020/10/3 上午10:00:14</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2020/10/3 上午10:00:14</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2020/10/3 上午10:00:14</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2020/10/3 上午10:00:14</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2020/10/3 上午10:00:14</td>
            </tr>
            <br />
          </tbody>
        </table>
      </div>
    </div>

    <div class="ShouYe-monitor">
      <el-container>
        <el-main style="padding:0px;">
          <el-table
                :data="this.$store.state.SData_Company[0].service"
                max-height="500px"
                style="width:1200px"
                >
                <el-table-column
                prop="id"
                label="客服ID"
                width="100"
                align="center">
                </el-table-column>
                <el-table-column
                prop="name"
                label="客服昵称"
                width="130"
                align="center">
                </el-table-column>
                <el-table-column
                prop="tName"
                label="客服姓名"
                width="130"
                align="center">
                </el-table-column>
                <el-table-column
                prop="account"
                label="客服账户"
                width="150"
                align="center">
                </el-table-column>
                <el-table-column
                prop="pwd"
                label="客服密码"
                width="150"
                align="center">
                </el-table-column>
                <el-table-column
                prop="tel"
                label="客服电话"
                width="150"
                align="center">
                </el-table-column>
                <el-table-column
                prop="email"
                label="客服邮箱"
                width="200"
                align="center">
                </el-table-column>
                <el-table-column
                label="客服状态"
                width="180"
                align="center">
                离线</el-table-column>
                </el-table>
        </el-main>
        <el-footer>
          <div class="shouye_echarts1" ref="line">
            
          </div>
          <div class="shouye_echarts2" ref="line1">

          </div>
        </el-footer>
      </el-container>
    </div>
    
  </div>
</template>

<script>
import ShouYeTuBiao from './ShouYeTuBiao'
let echarts = require('echarts')
export default {
  mounted: function () {
    let myChart = echarts.init(this.$refs.line)
    myChart.setOption(this.option)
    let myChart1 = echarts.init(this.$refs.line1)
    myChart1.setOption(this.option1)
  },
  components: {
    ShouYeTuBiao: ShouYeTuBiao
  },
  data: function() {
    return {
    option: {
      title: {
          text: '本周用户量',
        },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1205, 2104, 1050, 1308, 1794, 1106, 1305],
        type: 'bar'
    }]
},
option1 :{
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['访问量', '预订量','订单量', '成交量', '完成量']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '访问量'},
                {value: 310, name: '预订量'},
                {value: 234, name: '订单量'},
                {value: 135, name: '成交量'},
                {value: 1548, name: '完成量'}
            ]
        }
    ]
},

      navItems: [
        {
          title: '总会话量',
          count: 230,
          perc: '10%'
        },
        {
          title: '处理中的会话数量',
          count: 200,
          perc: '10%'
        },
        {
          title: '在线客服数',
          count: 30,
          perc: '10%'
        },
        {
          title: '今日消息数',
          count: 2300,
          perc: '10%'
        }
      ]
    }
  }
}
</script>

<style>
.ShouYe-frame {
  width: 1200px;
  height: 1620px;
  background-color: rgb(163, 196, 248);
}

.ShouYe-count-box {
  height: 203px;
  width: 1200px;
  background: rgb(163, 196, 248);
  border-radius: 4px;
  margin-top: 8px;

  box-sizing: border-box;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
}
.ShouYe-count-item {
  height: 120px;
  width: 500px;
  border: 1px;
  background-color: rgb(238, 241, 245);
  font-size: 14px;
  margin: 10px;
  line-height: 40px;
  text-align: center;
  padding-top: 14px;
  padding-bottom: 20px;
}

.ShouYe-title {
  font-size: 1.5em;
  color: #000;
}
.ShouYe-count {
  font-size: 2em;
  font-weight: 800;
  color: rgb(36, 147, 164);
}
.ShouYe-perc {
  font-size: 0.8;
  opacity: 0.6;
}

.ShouYe-zhong {
  width: 1200px;
  height: 400px;
}
.ShouYe-zujian {
  width: 800px;
  height: 400px;
  float: left;
  background-color: #fff;
}
.ShouYe-tongzhi {
  width: 395px;
  height: 400px;
  margin-left: 5px;
  float: right;
  background-color: white;
}
.ShouYe-h4 {
  font-size: 20px;
  text-align: center;
}
.ShouYe-th {
  width: 200px;
  font-size: 20px;
  text-align: center;
}
.ShouYe-td {
  width: 200px;
  font-size: 17px;
  text-align: center;
  color: rgb(13, 13, 174);
}
.ShouYe-td1 {
  width: 200px;
  text-align: center;
  font-size: 17px;
  color: rgb(61, 64, 64);
}

.ShouYe-monitor {
  width: 1200px;
  height: 500px;
  margin-top: 10px;
  background-color:rgb(36, 147, 164);
}
.shouye_echarts1{
  width: 900px;
  height: 300px;
  background-color: white;
  float: left;
}
.shouye_echarts2{
  width: 250px;
  height: 300px;
  background-color: white;
  float: right;
}
.containedDiv{
   background-color: #d3dce6;
    background-image: url(../../../img/fz1.jpg);
        width: 100%;
        height: 443px;
        background-repeat: no-repeat;
        background-size: cover;
}
</style>
