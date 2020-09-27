<template>
  <div style="height:700px">
    <el-row class="cardDiv" span="50px">
      <button class="cardButton">
        <el-card :body-style="{ padding: '0px' }" class="cardSelf">
          <div class="cardHead">超值一年版</div>
          <img src="../../../img/元宝.png" class="cardImg" />
          <el-table
            :data="C1_Data"
            style="width: 100%;margin-top:-10px;scrollbar-width: none;"
          >
            <el-table-column prop="pp" width="160"> </el-table-column>
            <el-table-column prop="data" width="60"> </el-table-column>
          </el-table>
          <div class="money">19999元</div>
        </el-card>
      </button>
      <button class="cardButton">
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
          <div class="money">49999元</div>
        </el-card>
      </button>
      <button class="cardButton">
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
          <div class="money">169999元</div>
        </el-card>
      </button>
    </el-row>
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
      ]
    }
  },
  methods: {}
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
  background-color: #00000000;
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
  font-size: 40px;
  font-weight: 800;
  color: red;
  font-style: oblique;
}
.el-table tbody tr:hover > td {
  background-color: white !important;
}
</style>
