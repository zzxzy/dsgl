<template>
  <div style="">
    <el-table :data="userlist" border style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180" height="450px">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="create_time" label="电话"> </el-table-column>
	  <el-table-column prop="role_name" label="角色"> </el-table-column>
      <el-table-column prop="mg_state" label="状态"> 
		<template slot-scope="scope">
			<el-switch 
  v-model="scope.row.mg_state"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
		</template>
	
	  </el-table-column>
	  <el-table-column prop="" label="操作">
		<el-button circle:true type="primary" icon="el-icon-edit" ></el-button>
		<el-button type="danger" icon="el-icon-delete" circle:true></el-button>
		<el-button type="warning" icon="el-icon-setting" circle:true></el-button>
	  </el-table-column>
    </el-table>
	<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 2, 3, 4,5]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="3">
    </el-pagination>
  </div>
</template>

<script>
import { getusers } from "@/api/user";
export default {
  data() {
    return {
		value: true,
      userlist: [],
	  currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    };
  },
  created() {
    let z = {
      pagenum: 1,
      pagesize: 5,
    };
    getusers(z).then((res) => {
     
      this.userlist = this.userlist = res.data.data.users;
	//   this.zt=res.data.data.users.mg_state
	//   console.log(zt);
	  console.log(res.data.data.users);
    });
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
};
</script>

<style>
</style>