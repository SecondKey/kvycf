<template>
  <el-container class="HuiHuaItem2_container">
    <el-header class="HuiHuaItem2_header">
      <h2>{{ this.$store.state.currentCustomer.name }}</h2>
    </el-header>
    <el-main class="HuiHuaItem2_main" v-if="this.$store.state.currentOrder">
      <el-button id="send_btn" @click="kehusend" style="float:right"
        >测试</el-button
      >
      <ul
        id="chat_ul"
        v-for="item in this.$store.state.currentOrder.convers[0].msg"
        :key="item.id"
      >
        <li>{{ item.owner }},{{ item.time }}:</li>
        <li style="list-style-type:none" class="speech">
          {{ item.contant }}
        </li>
      </ul>
    </el-main>
    <el-footer class="HuiHuaItem2_footer" height="30%">
      <el-select
        v-model="send_txt"
        placeholder="请选择"
        style="margin-top:10px;margin-bottom:10px"
      >
        <el-option
          v-for="item in this.$store.state.SData_Company[
            this.$store.state.Data_Login_Conpany
          ].KeFuChangYongYu"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        >
        </el-option>
      </el-select>
      <el-button
        id="send_btn"
        @click="send"
        type="primary"
        style="float:right;margin-top:10px;margin-bottom:10px"
        >发送</el-button
      >
      <!-- <el-input id="send_txt" type="text" ></el-input> -->
      <!-- <el-button id="choose_btn" @click="choose">选择</el-button> -->
      <el-input
        type="textarea"
        rows="8.1"
        id="send_txt"
        v-model="send_txt"
        class="HuiHuaItem_input"
      />
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      left: true,
      right: false,
      send_txt: '',

      kehuList: [],
      kefuList: []
    }
  },
  methods: {
    send() {
      console.log()
      this.right = true
      this.left = false
      let myDate = new Date()
      // console.log(this.send_txt)
      var chat_ul = document.getElementById('chat_ul')
      var chat_span = chat_ul.getElementsByTagName('span')
      if (send_txt.value == '') {
        alert('请不要惜字如金')
      } else {
        this.$store.commit('SData_AddConvers', {
          id: this.$store.state.SData_Company[
            this.$store.state.Data_Login_Conpany
          ].order[0].convers[0].msg.length,
          owner: '客服房镇',
          time: myDate.toLocaleString(),
          contant: this.send_txt
        })
        this.send_txt = ''
      }
      this.tabelData.sort()
    },
    kehusend() {
      this.right = false
      this.left = true
      console.log()
      let myDate = new Date()
      // console.log(this.send_txt)
      var chat_ul = document.getElementById('chat_ul')
      var chat_span = chat_ul.getElementsByTagName('span')
      if (send_txt.value == '') {
        alert('请不要惜字如金')
      } else {
        this.$store.commit('SData_AddConvers', {
          id: this.$store.state.SData_Company[
            this.$store.state.Data_Login_Conpany
          ].order[0].convers[0].msg.length,
          owner: '客户01',
          time: myDate.toLocaleString(),
          contant: this.send_txt
        })
        this.send_txt = ''
      }
      this.tabelData.sort()
    }
  },

  created() {
    this.$store.state.currentOrder = this.$store.state.SData_Company[0].order[0]
    console.log(this.$store.state.currentOrder)
  }
}
</script>

<style>
.right {
  float: right;
  clear: both;
}
.HuiHuaItem2_container {
  background-color: gainsboro !important;
  text-align: left;
}
.HuiHuaItem2_header {
  background-color: white;
  color: #000;
}
.HuiHuaItem2_main {
  background-color: rgb(233, 233, 233);
}
.HuiHuaItem2_footer {
  /* height: 500px; */
  background-color: white;
}
.HuiHuaItem_input {
  height: 10%;
  width: 90%;
  border-color: skyblue;
  border-style: solid;
  border-radius: 5px;
  padding-top: 0%;
  padding-bottom: 20%;
  /* margin-top: 2.5px;
  margin-bottom: 2.5px; */
}
.speech {
  position: relative;
  width: fit-content;
  height: auto;
  text-align: center;
  line-height: 50px;
  background-color: #fff;
  border: none;
  /* -webkit-border-radius: 5px;
-moz-border-radius: 5px; */
  border-radius: 15px;
  -webkit-box-shadow: 2px 2px 4px #888;
  -moz-box-shadow: 2px 2px 4px #888;
  box-shadow: 2px 2px 4px #888;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;
}
.speech:before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: 0px;
  top: 0px;
  border: 8px solid;
  border-color: rgb(255, 255, 255);
}
.speechright {
  position: relative;
  width: fit-content;
  height: auto;
  text-align: center;
  line-height: 50px;
  background-color: #fff;
  border: none;
  /* -webkit-border-radius: 5px;
-moz-border-radius: 5px; */
  border-radius: 15px;
  -webkit-box-shadow: 2px 2px 4px #888;
  -moz-box-shadow: 2px 2px 4px #888;
  box-shadow: 2px 2px 4px #888;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;
  float: right;
  clear: both;
}
.speechright:before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  right: 0px;
  top: 0px;
  border: 8px solid;
  border-color: rgb(255, 255, 255);
}
</style>
