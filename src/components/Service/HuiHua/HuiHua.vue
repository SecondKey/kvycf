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
    width: 1500px;
    height: 1200px;
    background-color: greenyellow;
}
.huihua-box1{
    width: 220px;
    height: 700px;
    background-color: hotpink;
    position: absolute;
    top: 70px;
    left: 70px;
}
.huihua-box2{
    width: 900px;
    height: 700px;
    background-color: green;
    position: absolute;
    top: 70px;
    left: 300px;
}
.huihua-box3{
    width: 250px;
    height: 300px;
    background-color: cadetblue;
    position: absolute;
    top: 70px;
    left: 1210px;
}
.huihua-box4{
    width: 250px;
    height: 385px;
    background-color: blue;
    position: absolute;
    top: 390px;
    left: 1210px;
}
</style>
