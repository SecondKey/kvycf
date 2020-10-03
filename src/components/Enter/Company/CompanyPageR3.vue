<template>
  <div style="height:1050px">
    <el-row class="cardDiv" span="50px">
      <button class="cardButton" @click="SelectCard('money1', 1)">
        <el-card :body-style="{ padding: '0px' }" class="cardSelf">
          <div id="cardHead1" class="cardHead">超值一年版</div>
          <img src="../../../img/元宝.png" class="cardImg" />
          <el-table
            :data="C1_Data"
            style="width: 100%;margin-top:-10px;scrollbar-width: none;"
          >
            <el-table-column prop="pp" width="160"> </el-table-column>
            <el-table-column prop="data" width="60"> </el-table-column>
          </el-table>
          <div class="money" id="money1">19999元</div>
        </el-card>
      </button>
      <button class="cardButton" @click="SelectCard('money2', 2)">
        <el-card :body-style="{ padding: '0px' }" class="cardSelf">
          <div class="cardHead">十年旗舰版</div>
          <img src="../../../img/钻石.png" class="cardImg" />
          <el-table
            :data="C2_Data"
            style="width: 100%;margin-top:-10px;scrollbar-width: none;"
          >
            <el-table-column prop="pp" width="160"> </el-table-column>
            <el-table-column prop="data" width="60"> </el-table-column>
          </el-table>
          <div class="money" id="money2">49999元</div>
        </el-card>
      </button>
      <button class="cardButton" @click="SelectCard('money3', 3)">
        <el-card :body-style="{ padding: '0px' }" class="cardSelf">
          <div class="cardHead">至尊永久版</div>
          <img src="../../../img/皇冠.png" class="cardImg" />
          <el-table
            :data="C3_Data"
            style="width: 100%;margin-top:-10px;scrollbar-width: none;"
          >
            <el-table-column prop="pp" width="160"> </el-table-column>
            <el-table-column prop="data" width="60"> </el-table-column>
          </el-table>
          <div class="money" id="money3">169999元</div>
        </el-card>
      </button>
    </el-row>

    <el-button
      type="success"
      id="SelectCardButton"
      :disabled="isChoised"
      style="margin-top:50px;width:300px;height:62px"
      @click="NextProcess"
    >
      确认选择
    </el-button>
    <div class="cardInfoDiv">
      <div style="font-size:40px;margin-top:10px">服务详情</div>
      <el-table
        :data="this.$store.state.SData_Enter_ServiceInfo"
        stripe
        border
        style="width: 100%;margin-top:9px"
      >
        <el-table-column prop="name" width="450px"> </el-table-column>
        <el-table-column prop="s1" label="一年版" width="150px">
        </el-table-column>
        <el-table-column prop="s2" label="十年版" width="150px">
        </el-table-column>
        <el-table-column prop="s3" label="永久版"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      C1_Data: [
        {
          pp: '客服数量',
          data: '30'
        },
        {
          pp: '管理员数量',
          data: '3'
        },
        {
          pp: '储存空间',
          data: '50G'
        }
      ],
      C2_Data: [
        {
          pp: '客服数量',
          data: '100'
        },
        {
          pp: '管理员数量',
          data: '10'
        },
        {
          pp: '储存空间',
          data: '500G'
        }
      ],
      C3_Data: [
        {
          pp: '客服数量',
          data: '不限'
        },
        {
          pp: '管理员数量',
          data: '100'
        },
        {
          pp: '储存空间',
          data: '10T'
        }
      ],
      choiseCard: 0,
      isChoised: true
    }
  },
  methods: {
    SelectCard(name, index) {
      document.getElementById('money1').style.background = 'transparent'
      document.getElementById('money2').style.background = 'transparent'
      document.getElementById('money3').style.background = 'transparent'

      document.getElementById(name).style.background = 'yellow'
      this.choiseCard = index
      this.isChoised = false
    },
    NextProcess() {
      this.$store.commit('CompanyInfo_SignUp_ChoiseScheme', {
        id: this.$store.state.Data_SignUp_Company_ID,
        card: this.choiseCard
      })
      this.$router.push('/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR4')
      this.$store.commit('Layout_SetCompanyProgress', 3)
    }
  }
}
</script>

<style>
.cardDiv {
  width: 900px;
  text-align: center;
}
.cardButton {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  width: 240px;
  height: 380px;
  border: none;
  outline: none;
  outline: unset;
  background-color: #00000000;
}
.cardButton:hover > .cardSelf {
  outline: solid red 5px;
}
.cardSelf {
  width: 100%;
  height: 100%;
  text-align: center;
}
.cardImg {
  width: 80px;
  height: 80px;
}
.cardHead {
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
}
.money {
  line-height: 60px;
  font-size: 40px;
  font-weight: 800;
  color: red;
  font-style: oblique;
  background-color: transparent;
}

.el-table tbody tr:hover > td {
  background-color: transparent !important;
}

.cardInfoDiv {
  margin-top: 50px;
  widows: 800px;
  height: 440px;
  border: solid #00000077;
  text-align: center;
}
</style>
