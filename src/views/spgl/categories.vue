<template>
  <div>

    <el-card>
         <!-- 添加角色按钮 -->
      <el-row>
        <el-col>
          <el-button style="float: left;margin-bottom: 20px;" @click="dialogVisible = true" type="primary"
            >添加分类</el-button
          >
        </el-col>
      </el-row>

      <!-- 表格 -->
      <tree-table :data="catelist" border
      :columns="columns" :expand-type="false" 
      :selection-type="false" show-index>
<template slot="isok" slot-scope="scope">
<i class="el-icon-success" v-if="scope.row.eat_deleted===false" style="color:lightgreen"></i>
<i class="el-icon-error"  style="color:lightgreen" v-else></i>
</template>
      </tree-table>
    </el-card>
  </div>
</template>

<script>
import { getcatelist } from "@/api/spgl.js";
export default {
  data() {
    return {
      querInfo: {
        type: 3,
        pagenum: 3,
        pagesize: 5,
      },
      catelist: [],
      total:0,
      columns:[
        {
        label:'分类名称',
        prop:'cat_name'
        },
        {
            label:'是否有效',
            type:'template',
            template:'isok',
        }
      ]
    }
  },
  created() {
    getcatelist(this.querInfo).then((res) => {
      console.log(res.data.data.result);
      if (res.data.meta.status !== 200) {
        alert("000");
      }
      this.catelist=res.data.data.result
      this.total=res.data.data.total
    });
  },
};
</script>

<style>
</style>