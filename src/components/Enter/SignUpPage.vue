<template>
  <div class="signupBackGround">
    <div class="mask">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.signupBackGround {
  width: 100%;
  min-height: 100%;
  background-image: url('../../img/EnterBackground.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.mask {
  margin: auto;
  width: 900px;
  min-height: 900px;
  background-color: #ffffffcc;
  text-align: center;
}

.signUpImage {
  margin: auto;
  padding-top: 50px;
  margin-bottom: 50px;
  width: 500px;
}
.sourceImg {
  width: 100px;
  height: 100px;
  float: left;
}
.arrow {
  width: 150px;
  height: 100px;
}
.targetImg {
  width: 170px;
  height: 93px;
  float: right;
}
.joininHead {
  margin-top: -30px;
  font-size: 60px;
  font-weight: 800;
}
.progress {
  margin-top: 30px;
}

.signUpInnerPage {
  margin: auto;
  margin-top: 50px;
}

.signUpInputDiv {
  width: 350px;
  text-align: center;
}

.waitForDO {
  margin: auto;
  width: 500px;
  height: 250px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
}
</style>
