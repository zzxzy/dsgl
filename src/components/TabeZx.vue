<template>
    <div>
      <!-- 渲染表格 -->
      <el-table :data="tableData" style="width: 100%">
  
        <!-- 使用 v-for 循环渲染表格列 -->
        <el-table-column v-for="(item) in tableColumn" :key="item.index"
          :prop="item.prop" :label="item.label" width="180">
  
          <!-- 使用 slot-scope 属性绑定作用域插槽 -->
          <template slot-scope="scope">
          
            <!-- 如果当前列有自定义渲染函数，则渲染扩展组件 -->
            <expandDom v-if="item.render"
              :render="item.render"
              :index="scope.$index"
              :column="item"
              :row="scope.row">
            </expandDom>
  
            <!-- 如果当前列没有自定义渲染函数，则直接渲染列数据 -->
            <span v-else>
                
              {{scope.row[item.prop]}}
            </span>
  
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  import expandDom from "./expandDom.vue"
  
  export default {
    components: {
      expandDom
    },
  
    props: {
      // 表格数据，类型为数组，默认值为空数组
      tableData: {
        type: Array,
        default: () => []
      },
  
      // 表格列配置，类型为数组，默认值为空数组
      tableColumn: {
        type: Array,
        default: () => []
      },
  
      // 是否启用手动分页，类型为布尔值，默认值为 false
      isHander: {
        type: Boolean,
        defualt: false
      }
    }
  }
  </script>
  
  <style>
  /* 空样式 */
  </style>