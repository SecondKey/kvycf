<template>
  <div class="containedDiv" style="height:960px">
    <ShouYeItem1 class="shouye-box1"></ShouYeItem1>

    <ShouYeItem2 class="shouye-box2"></ShouYeItem2>

    <ShouYeItem4 class="shouye-box4"></ShouYeItem4>
  </div>
</template>

<script>
import ShouYeItem1 from './ShouYeItem1'
import ShouYeItem2 from './ShouYeItem2'
// import ShouYeItem3 from './ShouYeItem3'
import ShouYeItem4 from './ShouYeItem4'
// import ShouYeItem5 from './ShouYeItem5'
export default {
  components: {
    ShouYeItem1: ShouYeItem1,
    ShouYeItem2: ShouYeItem2,
    // 'ShouYeItem3':ShouYeItem3,
    ShouYeItem4: ShouYeItem4
    // 'ShouYeItem5':ShouYeItem5
  }
}
</script>

<style>
.shouye-page {
  position: relative;
  margin: 0 auto;
  width: 1410px;
  height: 1160px;
  background-image: url(../../../img/fz1.jpg);
}
.shouye-box1 {
  width: 700px;
  height: 443px;
  position: absolute;
  top: 85px;
  left: 500px;
  background-color: rgb(115, 115, 126);
}
.shouye-box2 {
  width: 380px;
  height: 423px;
  position: absolute;
  top: 85px;
  left: 100px;
  background-color:aqua;
}
.shouye-box4 {
  width: 1100px;
  height: 340px;
  position: absolute;
  top: 566px;
  left: 100px;
  background-color:skyblue;
}
</style>
