
<template>
  <div style="">
    <!-- 搜索框 -->
    <el-input v-model="z.query" clearable placeholder="请输入内容" style="width: 320px;float: left;margin-bottom: 20px;">
    </el-input>
    <!-- 搜索按钮 -->
    <el-button v-on:click="xy" style="background-color: black;float: left;" type="primary" icon="el-icon-search"></el-button>
    <!-- 添加用户按钮 -->
    <el-button style="float: left;"  @click="dialogVisible = true"  type="primary">添加用户</el-button>
    
    <!-- 用户列表 -->
    <TabeZx :tableData="tableData" :tableColumn="tableColumn" :isHander="isHander">
    
    
    </TabeZx>
    
    <!-- 分页器 -->
    <el-pagination style="margin-top: 20px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="z.pagenum"
      :page-sizes="[1, 2, 3, 4,5]"
      :page-size="z.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 添加用户对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <!-- 手机 -->
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 对话框底部按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="tj">确 定</el-button>
      </span>
    </el-dialog>
<!-- 修改用户对话框 -->
<el-dialog
      title="提示"
      :visible.sync="dVisible"
      width="30%"
      :before-close="handleClose">
      <el-form :model="up" :rules="rules"  label-width="100px" class="demo-ruleForm">
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="up.username"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="up.email"></el-input>
        </el-form-item>
        <!-- 手机 -->
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="up.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 对话框底部按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dVisible = false">取 消</el-button>
        <el-button @click="gx" type="primary" >确 定</el-button>
      </span>
    </el-dialog>
  </div>  
</template>
<script>
import { getusers,add,del,updat,start } from "@/api/user";
import TabeZx from "@/components/TabeZx"
import tableColumn from "@/hooks/userListColums.js"
export default {
  components:{
    TabeZx
  },
  data() {
    return {
      tableData: [],
				tableColumn: tableColumn,
      up:{
       
      },
      value:'',
      username:'',
      password:'',
      email: "",
      mobile:'',
      dialogVisible: false,
      dVisible:false,
      input: '',
		value: '',
      userlist: [],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
         
        
        },
        z:{
            query:"",
          pagenum: 1,
          pagesize: 3,
        },
        total:0,
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
  created() {
    
   this.xy()
    
    
  },


methods: {
  zt(uesr){
    start(uesr.id,uesr.mg_state).then(res => {
    console.log(res);
    // 刷新用户列表
  })
  },
  handleRowClick(row, column, event) {
      const index = row.$index + 1;
      console.log('当前行的序号为：', index);
    },
  dv(id){
    console.log(id);
    
    getusers(this.z).then((res) => {
    this.up=res.data.data.users[id]
    console.log(res.data.data.users[id]);
  });
    // alert(index)
  },
 gx() {
  // 打印出 this.up 对象中的 id 和 email 属性
  console.log(this.up.id, this.up.email);
  // 将 dVisible 属性设置为 false，关闭弹出窗口
  this.dVisible = false;
  // 调用 updat 函数更新 up.id 对应的记录的 email 和 mobile 属性
  updat(this.up.id, { email: this.up.email, mobile: this.up.mobile }).then((res) => {
    // 打印出更新操作的结果
    console.log(res);
    // 调用 xy 函数重新加载数据列表
    return this.xy();
  });
},
// 获取用户列表
xy(){
  getusers(this.z).then((res) => {
    // 获取用户总数
    this.total=res.data.data.total
    console.log(res.data.data.total);
    // 获取用户列表
    this.tableData = res.data.data.users;
    this.value = res.data.data.users;
    console.log(res.data.data.users);
  });
},

// 提交添加用户表单
tj(){
  console.log(0);
  console.log(this.username);
  // 关闭对话框
  this.dialogVisible=false
  // 构建用户对象
  let ad={
    username:this.username,
    password:this.password,
    email:this.email,
    mobile:this.mobile,
  }
  // 添加用户
  add(ad).then(res => {
    console.log(res);
    // 刷新用户列表
    this.xy();
  })
},

// 删除用户
de(id){
  console.log(id);
  let i=id;
  console.log(i);
  // 发送删除请求
  del(i).then(res => {
    console.log(res);
    return
  })
},

// 关闭对话框
handleClose(done) {
  this.$confirm('确认关闭？')
    .then(_ => {
      done();
    })
    .catch(_ => {});
},

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

// 提交表单
submitForm(formName) {
  this.$refs[formName].validate((valid) => {
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
},

// 重置表单
resetForm(formName) {
  this.$refs[formName].resetFields();
}

}
};
</script>

<style>
</style>