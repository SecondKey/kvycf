<template>
  <div class="ShouYe-frame">
    <div class="ShouYe-count-box">
      <div class="ShouYe-count-item" v-for="item in navItems" :key="item.title">
        <div class="ShouYe-title">{{ item.title }}</div>
        <div class="ShouYe-count">{{ item.count }}</div>
        <div class="ShouYe-perc">较昨日上涨{{ item.perc }}</div>
      </div>
    </div>

    <div class="ShouYe-zhong">
      <ShouYeTuBiao class="ShouYe-zujian">
      </ShouYeTuBiao>

      <div class="ShouYe-tongzhi">
          <h4 class="ShouYe-h4">通知</h4>
          <p>时间日期 </p>
          <p></p>
          <p></p>


      </div>
    </div>

    <div class="ShouYe-monitor">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import ShouYeTuBiao from './ShouYeTuBiao'

export default {
  components: {
    ShouYeTuBiao: ShouYeTuBiao,
  },
  data: function () {
    return {
      navItems: [
        {
          title: '总会话量',
          count: 230,
          perc: '10%',
        },
        {
          title: '处理中的会话数量',
          count: 200,
          perc: '10%',
        },
        {
          title: '在线客服数',
          count: 30,
          perc: '10%',
        },
        {
          title: '今日消息数',
          count: 2300,
          perc: '10%',
        },
      ],
    }
  },
}
</script>

<style>
.ShouYe-frame {
  width: 1200px;
  height: 2000px;
  background-color: rgb(109, 177, 154);
}


.ShouYe-count-box {
  height: 203px;
  width: 1200px;
  background: rgb(238, 241, 245);
  border-radius: 4px;
  margin-top: 30px;

  box-sizing: border-box;
  padding: 14px 20px;

  display: flex;
  justify-content: space-between;
}
.ShouYe-count-item {
  height: 120px;
  width: 500px;
  border: 1px;
  background-color: rgb(253, 193, 120);
  font-size: 13px;
  margin: 10px;
  line-height: 40px;
  text-align: center;
  padding-top: 40px;
  
}

.ShouYe-title {
  margin: 1px;
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
  background-color: #fff;
}
  .ShouYe-h4{
      font-size: 20px;
      text-align: center;

  }



.ShouYe-monitor {
  width: 1200px;
  height: 1000px;
  margin-top: 10px;
  background-color: rgb(204, 187, 164);
}
</style>