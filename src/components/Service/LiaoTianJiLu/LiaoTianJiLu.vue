<template>
    <div class="liaotianjilu-page">聊天目录
    <div class="liaotianjilu-box1">
        <div class="el-icon-iconName">
        <el-button type="primary">搜索<i class="el-icon-search el-icon--right"></i></el-button>
    </div>
    </div>
    <div class="liaotianjilu-box2"></div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.liaotianjilu-page {
  width: 1500px;
  height: 1100px;
  background-color: blue;
  font-size: 3em;
}
.liaotianjilu-box1{
    position: absolute;
    top: 10px;
    right: 50px;
}
.liaotianjilu-box2{
    width: 1450px;
    height: 1000px;
    position: absolute;
    top: 80px;
    left: 25px;
    background-color: hotpink;
}
</style>
