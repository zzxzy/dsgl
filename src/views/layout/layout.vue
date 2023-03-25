<template>
  <div>
    <el-container>
      <el-header>
        <NavBox></NavBox>
      </el-header>
      <el-container>
        <el-aside width="220px" style="overflow: hidden">
          <SideBox></SideBox>
        </el-aside>
        <el-main height="700px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBox from "./component/NavBox.vue";
import Content from "./component/Content.vue";
import SideBox from "./component/SideBox.vue";

export default {
  methods: {
   
  },
  data() {
    return {
     
    };
  },
  components: {
    NavBox,
    Content,
    SideBox,
  },
};
</script>

<style scoped>
.el-header {
  background-color: rgb(133, 206, 252);
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #D3DCE6; */
  color: rgb(114, 230, 251);
  text-align: center;
  line-height: 200px;
  overflow: none;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  height: 700px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
