<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-size="20"
      layout="total, prev, pager, next"
      :total="all">
    </el-pagination>
  </div>
</template>
<script>
  export default {
      name: 'page',
      props: {
        all:{
          type: String,
          default: "0"
        },
        page:{
          type: String,
          default:"1"
        }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         this.$emit('CurrentPage', val);
      }
    },
    data() {
      return {
      };
    }
  }
</script>