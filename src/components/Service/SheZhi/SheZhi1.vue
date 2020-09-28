<template>
  <div class="shezhi1-page"><h3>黑名单设置</h3>
      <SheZhi1Item class="shezhi1-box">设置表格</SheZhi1Item>
  </div>
</template>

<script>
import SheZhiI1tem from './SheZhi1Item'
export default {
    components:{
        'SheZhiItem':SheZhi1Item
    },
}
</script>

<style>
.shezhi1-page{
    width: 1500px;
    height: 1180px;
    background-color: brown;
    }
.shezhi1-box{
    width: 1400px;
    height: 1000px;
    background-color: chartreuse;
    position: absolute;
    top: 100px;
    left: 50px;
}
</style>