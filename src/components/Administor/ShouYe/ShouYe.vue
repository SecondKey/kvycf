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
              <td class="ShouYe-td1">2019/09/12 10:99</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2019/09/12 10:99</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2019/09/12 10:99</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2019/09/12 10:99</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2019/09/12 10:99</td>
            </tr>
            <br />
            <tr>
              <td class="ShouYe-td"><u>WCT-24新品上线 </u></td>
              <td class="ShouYe-td1">2019/09/12 10:99</td>
            </tr>
            <br />
          </tbody>
        </table>
      </div>
    </div>

    <div class="ShouYe-monitor">
      <div></div>
    </div>
  </div>
</template>

<script>
import ShouYeTuBiao from './ShouYeTuBiao'

export default {
  components: {
    ShouYeTuBiao: ShouYeTuBiao
  },
  data: function() {
    return {
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
  height: 1000px;
  margin-top: 10px;
  background-color: rgb(243, 228, 208);
}
</style>
