<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片容器 -->
    <el-card>
      <!-- 添加角色按钮 -->
      <el-row>
        <el-col>
          <el-button @click="dialogVisible = true" type="primary"
            >添加角色</el-button
          >
        </el-col>
      </el-row>

      <!-- 角色列表表格 -->
      <TabeZx :tableData="tableData" :tableColumn="tableColumn" :isHander="isHander"></TabeZx>
    </el-card>
    <!-- 分配权限对话框 -->
    <el-dialog
  title="分配权限"
  :visible.sync="setdialogVisible"
  @close="setcold"
  width="50%">
  <el-tree :data="qxlist" :props="treeProps" show-checkbox ref="treeRef"
  node-key="id" default-expand-all :default-checked-keys="defkeys"></el-tree>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="allot">确 定</el-button>
  </span>
</el-dialog>
    <!-- 添加用户对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 用户名 -->
        <el-form-item label="用户名">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item label="描述">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <!-- 对话框底部按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="iu">确定</el-button>
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
         <el-form-item label="用户名">
          <el-input v-model="up.roleName"></el-input>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item label="描述">
          <el-input v-model="up.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <!-- 对话框底部按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dVisible = false">取 消</el-button>
        <el-button  type="primary"  @click="gx">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
  
  <script>
import { roles,addros,updat,del,ql,fpqx } from "@/api/roles.js";
import TabeZx from "@/components/TabeZx"
export default {
  components: {
			TabeZx
		},
  data() {
    return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				tableColumn: [{
						label: "日期",
						prop: 'date'
					},
					{
						label: "姓名",
						prop: 'name'
					},
					{
						label: "地址",
						prop: 'address'
					},
					{
						label: "操作",
						prop: "operation",
						// render 自定义的
						render: (h, params) => {
							return h('div', [
								h('a', {
									domProps: {
										innerHTML: "查看"
									},
									style: {
										marginRight: "10px",
									},
									on: {
										click: () => {
											alert("查看页面")
										}
									}
								}),
								h('a', {
									domProps: {
										innerHTML: "删除"
									},
									style: {
										marginRight: "10px",
									},
									on: {
										click: () => {
											this.delItems()
										}
									}
								})


							])



						}

					}
				],
				isHander: true
			}
    // return {
    //   dialogVisible: false,
    //   setdialogVisible:false,

    //   dVisible: false,
    //   up:{

    //   },
    //   qxlist:[],
    //   treeProps:{
    //     label:'authName',
    //     children: 'children',
    //   },
    //   defkeys:[],
    //   roleIdq:'',
    //   roleslist: [], // 角色列表数据
    //   ruleForm: {
    //     roleName: "",
    //     roleDesc: "",
    //   },
    //   rules: {
    //     name: [
    //       { required: true, message: "请输入用户名", trigger: "blur" },
    //       { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
    //     ],
    //     roleDesc: [
    //       { required: true, message: "请输入用户名", trigger: "blur" },
    //       { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
    //     ],
    //   },
    // };
  },

  created() {
    // 获取角色列表数据
  
    this.rolesList()
  },

  mounted() {
    this.$bus.$on("hello", (res) => {
      console.log(res);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
  methods: {
  showqx(role){
    this.roleIdq=role.id
      ql().then(res => {
        console.log(res);
        if(res.data.meta.status!=200){
      return  this.$message.error('获取权限数据失败')
      }else{
        
        this.qxlist=res.data.data
        console.log(this.qxlist);
      }
      })
      this.getleafkeys(role,this.defkeys)
this.setdialogVisible=true;

    },
    dv(id){
    console.log(id);
    roles().then((res) => {
      this.up = res.data.data[id];
      console.log(res.data.data[id]);
    });
   
  },
  gx() {
  // 打印出 this.up 对象中的 id 和 email 属性
  console.log(this.up.id, this.up.email);
  // 将 dVisible 属性设置为 false，关闭弹出窗口
  this.dVisible = false;
  // 调用 updat 函数更新 up.id 对应的记录的 email 和 mobile 属性
  updat(this.up.id, { roleName: this.up.roleName, roleDesc: this.up.roleDesc }).then((res) => {
    // 打印出更新操作的结果
    console.log(res);
    // 调用 xy 函数重新加载数据列表
    return this.rolesList();
  });
},
    iu(){
      console.log(0);
      console.log(this.ruleForm);
      // 关闭对话框
      this.dialogVisible = false;
       // 添加用户
       addros(this.ruleForm).then(res => {
    console.log(res);
    // 刷新用户列表
    this.rolesList()
  })
    },
    rolesList(){
        roles().then((res) => {
      this.roleslist = res.data.data;
      console.log(res.data);
    });
    },
    // 关闭对话框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    async removeID() {
      console.log(this.info); // 输出 this.info 的值

      // 确认删除对话框
      const confirmResult = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);

      if (confirmResult !== "confirm") {
        return this.$message.info("取消了删除");
      }

      console.log("确认了删除");
      // 删除逻辑
    },
    async remove(id) {
    //   console.log(this.info); // 输出 this.info 的值
console.log(id);
      // 确认删除对话框
      const confirmResult =
       await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
   
      if (confirmResult !== "confirm") {
        return this.$message.info("取消了删除");
      }
     
      console.log("确认了删除");
      del(id).then(res => {
    console.log(res);
    this.rolesList()
    return this.$message({
          message: '删除成功',
          type: 'success'
        });
  
  })
      // 删除逻辑
    },
    getleafkeys(node,arr){
if(!node.children){
  return arr.push(node.id)
}
node.children.forEach(item=>
  this.getleafkeys(item,arr))
 },
 setcold(){
  this.defkeys=[]
},
  allot(){
  const keys=[
    ...this.$refs.treeRef.
    getCheckedKeys(),
    ...this.$refs.treeRef.
    getHalfCheckedKeys(),
  ]
 const idStr=keys.join(",")

fpqx(this.roleIdq,{rids:idStr}).then(res=>{
  if(res.data.meta.status !==200){
  return this.$message.error('分配失败')
 }

 this.$message({
          message: '分配成功',
          type: 'success'
        });
        
console.log(res);
 })
 
 
 this.setdialogVisible=false
}
   
  },
};
</script>
  
  <style>
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>