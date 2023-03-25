<template>
  <div style="">
    <!-- 搜索框 -->
    <el-input
      v-model="z.query"
      clearable
      placeholder="请输入内容"
      style="width: 320px; float: left; margin-bottom: 20px"
    >
    </el-input>
    <!-- 搜索按钮 -->
    <el-button
      v-on:click="xy"
      style="background-color: black; float: left"
      type="primary"
      icon="el-icon-search"
    ></el-button>
    <!-- 添加用户按钮 -->
    <el-button style="float: left"  type="primary"
      >添加用户</el-button
    >

    <!-- 用户列表 -->
    <el-table
      :data="goodslist"
      border
      style="width: 100%"
    >
      <!-- 序号 -->
      <el-table-column type="index" label="序号" width="100" height="450px">
      </el-table-column>
      <!-- 姓名 -->
      <el-table-column prop="goods_name" label="商品名称" width="680" height="450px">
      </el-table-column>
      <!-- 邮箱 -->
      <el-table-column prop="goods_price" label="商品价格(元)" width="180"> </el-table-column>
      <!-- 电话 -->
      <el-table-column prop="goods_weight" label="商品重量"> </el-table-column>
      <!-- 角色 -->
      <el-table-column prop="add_time" label="创建时间">
        <template slot-scope="scope">
{{ scope.row.add_time |dateFormat }}
        </template>
      </el-table-column>
     

      <!-- 操作 -->
      <el-table-column prop="id" label="操作">
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-button
            @click="dVisible = true"
            v-on:click="dv(scope.$index)"
            circle:true
            type="primary"
            icon="el-icon-edit"
          ></el-button>
          <!-- 删除按钮 -->
          <el-button
            @click="de(scope.row.id)"
            type="danger"
            icon="el-icon-delete"
            circle:true
          ></el-button>

        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination
      style="margin-top: 20px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="z.pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="z.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

  
  </div>
</template>

<script>
import { getrolist } from "@/api/roles.js";
export default {
  data() {
    return {
      goodslist: [],
      dialogVisible: false,
      total:0,
      z: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pawss: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 6 到 8 个字符', trigger: 'blur' }
          ],
          emil: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 6 到 8 个字符', trigger: 'blur' }
          ],
          pho: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 6 到 8 个字符', trigger: 'blur' }
          ],
        }
    };
  },
  methods: {
    // 每页显示条数改变
handleSizeChange(val) {
  console.log(`每页 ${val} 条`);
  // 更新查询条件中的每页显示条数
  this.z.pagesize=val
  // 刷新用户列表
  this.xy()
},
// 当前页码改变
handleCurrentChange(val) {
  console.log(`当前页: ${val}`);
  // 更新查询条件中的当前页码
  this.z.pagenum=val
  // 刷新用户列表
  this.xy()
},
    xy() {
        getrolist(this.z).then((res) => {
    //   获取用户总数
      this.total=res.data.data.total
      console.log(res.data.data.total);
      // 获取用户列表
    //   this.value = res.data.data.users;
      this.goodslist=res.data.data.goods
      console.log(res.data.data.goods);
    });
    },
    // 关闭对话框
handleClose(done) {
  this.$confirm('确认关闭？')
    .then(_ => {
      done();
    })
    .catch(_ => {});
},

  },
  created() {
   this.xy()
  },
};
</script>

<style>
</style>