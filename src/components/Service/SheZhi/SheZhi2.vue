<template>
  <div class="shezhi2-page">
      <SheZhi2Item1 class="shezhi2-box1"><h3>设置客服信息</h3></SheZhi2Item1>
      <SheZhi2Item2 class="shezhi2-box2"><h3>设置密码</h3></SheZhi2Item2>
  </div>
</template>

<script>
import SheZhi2Item1 from './SheZhi2Item1'
import SheZhi2Item2 from './SheZhi2Item2'
export default {
    components:{
        'SheZhi2Item1':SheZhi2Item2,
        'SheZhi2Item2':SheZhi2Item2
    },
}
</script>

<style>
.shezhi2-page{
    width: 1500px;
    height: 1180px;
    background-color: rgb(31, 28, 206);
    }
.shezhi2-box1{
    width: 1400px;
    height: 500px;
    background-color: chartreuse;
    left: 50px;
    top: 50px;
}
.shezhi2-box2{
    width: 1400px;
    height: 400px;
    background-color: crimson;
    left: 50px;
    top: 0px;
}
</style>