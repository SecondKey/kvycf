<template>
    <div class="gongdan-page">
        <GongDanItem1 class="gongdan-box1">工单目录表格</GongDanItem1>
        <GongDanItem2 class="gongdan-box2">工单内容</GongDanItem2>
    </div>
</template>

<script>
import GongDanItem1 from './GongDanItem1'
import GongDanItem2 from './GongDanItem2'
export default {
    components:{
        'GongDanItem1':GongDanItem1,
        'GongDanItem2':GongDanItem2

    },
}
</script>

<style>
    .gongdan-page{
    width: 1500px;
    height: 1180px;
    background-color: green;
    }
    .gongdan-box1{
        width: 300px;
        height: 400px;
        position: absolute;
        background-color: chocolate;
        top: 70px;
        left: 70px;
    }
    .gongdan-box2{
        width: 1130px;
        height: 1120px;
        position: absolute;
        background-color: cornflowerblue;
        top: 70px;
        left: 380px;
    }
</style>
