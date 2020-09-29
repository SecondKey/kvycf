<template>
    <div class="shezhi-page">
        <SheZhiItem1 class="shezhi-box1">黑名单设置</SheZhiItem1>
        <SheZhiItem2 class="shezhi-box2">设置客服信息</SheZhiItem2>
    </div>
</template>

<script>
import SheZhiItem1 from './SheZhiItem1'
import SheZhiItem2 from './SheZhiItem2'
export default {
    components:{
        'SheZhiItem1':SheZhiItem2,
        'SheZhiItem2':SheZhiItem2
    },
}
</script>

<style>
.shezhi-page{
    width: 1410px;
    height: 1160px;
    background-color: violet;
    }
.shezhi-box1{
    width: 650px;
    height: 1100px;
    background-color: blue;
    position: absolute;
    top: 70px;
    left: 70px;
}
.shezhi-box2{
    width: 650px;
    height: 1100px;
    background-color: yellow;
    position: absolute;
    top: 70px;
    left: 730px;
}
</style>
