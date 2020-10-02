<template>
  <el-carousel indicator-position="none">
    <el-carousel-item v-for="item in 4" :key="item">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
  .el-carousel__item:nth-child(4n) {
    background-image: url(./../../../assets/1.jpg);
      width: 100%;
      height: 443px;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .el-carousel__item:nth-child(4n+1) {
    background-color: #d3dce6;
    background-image: url(./../../../assets/2.jpg);
        width: 100%;
        height: 443px;
        background-repeat: no-repeat;
        background-size: cover;
  }
  .el-carousel__item:nth-child(4n+2) {
    background-color: #d3dce6;
    background-image: url(./../../../assets/3.jpg);
      width: 100%;
      height: 443px;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .el-carousel__item:nth-child(4n+3) {
    background-color: #d3dce6;
    background-image: url(./../../../assets/4.jpg);
      width: 100%;
      height: 443px;
      background-repeat: no-repeat;
      background-size: cover;
  }

</style>