<template>
  <div>
    
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
  <el-breadcrumb-item>权限列表</el-breadcrumb-item>
</el-breadcrumb>

<el-card>
    <el-table :data="rightlist" border stripe>
        <el-table-column type="index"></el-table-column>
      <el-table-column label="权限名称" prop="authName"></el-table-column>
      <el-table-column label="路径" prop="path"></el-table-column>
      <el-table-column label="权限等级" prop="level">
        <template slot-scope="scope">
        <el-tag v-if="scope.row.level=='0'">一级</el-tag>
    <el-tag type="success" v-else-if="scope.row.level==='1'">二级</el-tag>
    <el-tag type="warning" v-else>三级</el-tag>
    </template>
      </el-table-column>
    
    </el-table>
</el-card>
  </div>
</template>

<script>
import { ql } from "@/api/roles.js";

export default {
  data() {
    return {
      rightlist: []
    };
  },
  created() {
    this.aa();
  },
  methods: {
    aa() {
        this.$bus.$emit('hello',this.t())
      ql().then(res => {
        this.rightlist = res.data.data;
        console.log(res.data.data[0].level);
      });
    },
    t(){
       console.log('uu');
    }
  }
};
</script>

<style>

</style>