<template>
    <div class="huihua-page">
        <HuiHuaItem1 class="huihua-box1">会话人表格</HuiHuaItem1>
        <HuiHuaItem2 class="huihua-box2">会话内容</HuiHuaItem2>
        <HuiHuaItem3 class="huihua-box3">会话人信息</HuiHuaItem3>
        <HuiHuaItem4 class="huihua-box4">常用语</HuiHuaItem4>
    </div>
</template>

<script>
import HuiHuaItem1 from './HuiHuaItem1'
import HuiHuaItem2 from './HuiHuaItem2'
import HuiHuaItem3 from './HuiHuaItem3'
import HuiHuaItem4 from './HuiHuaItem4'
export default {
    components:{
        'HuiHuaItem1':HuiHuaItem1,
        'HuiHuaItem2':HuiHuaItem2,
        'HuiHuaItem3':HuiHuaItem3,
        'HuiHuaItem4':HuiHuaItem4
    },
}
</script>

<style>
.huihua-page{
    width: 1410px;
    height: 1160px;
    background-color: greenyellow;
}
.huihua-box1{
    width: 240px;
    height: 1100px;
    background-color: hotpink;
    position: absolute;
    top: 50px;
    left: 40px;
}
.huihua-box2{
    width: 850px;
    height: 1100px;
    background-color: green;
    position: absolute;
    top: 50px;
    left: 290px;
}
.huihua-box3{
    width: 240px;
    height: 480px;
    background-color: cadetblue;
    position: absolute;
    top: 50px;
    left: 1150px;
}
.huihua-box4{
    width: 240px;
    height: 600px;
    background-color: blue;
    position: absolute;
    top: 550px;
    left: 1150px;
}
</style>
