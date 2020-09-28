<template>
  <div class="shouye-page">
    <ShouYeItem1 class="shouye-box1"></ShouYeItem1>
      <ShouYeItem2 class="shouye-box2"></ShouYeItem2>
      <ShouYeItem3 class="shouye-box3"></ShouYeItem3>
      <ShouYeItem4 class="shouye-box4"></ShouYeItem4>
      <ShouYeItem5 class="shouye-box5"></ShouYeItem5>
  </div>
</template>

<script>
import ShouYeItem1 from './ShouYeItem1'
import ShouYeItem2 from './ShouYeItem2'
import ShouYeItem3 from './ShouYeItem3'
import ShouYeItem4 from './ShouYeItem4'
import ShouYeItem5 from './ShouYeItem5'
export default {
  components:{
    'ShouYeItem1':ShouYeItem1,
    'ShouYeItem2':ShouYeItem2,
    'ShouYeItem3':ShouYeItem3,
    'ShouYeItem4':ShouYeItem4,
    'ShouYeItem5':ShouYeItem5
  },
}
</script>

<style>
.shouye-page {
  width: 1500px;
  height: 1100px;
  background-color: rgb(226, 23, 23);
}
.shouye-box1 {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 100px;
  left: 500px;
  background-color: blue;
  
}
.shouye-box2 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: 200px;
  background-color: blue;
}
.shouye-box3 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: 500px;
  background-color: green;
}
.shouye-box4 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: 800px;
  background-color: darkseagreen;
}
.shouye-box5 {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 500px;
  left: 1100px;
  background-color: midnightblue;
}
</style>
