<template>
  <div>
    <div class="G-col-main">
      <el-row :gutter="20">
        <el-col :span="6"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="6"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="6">
          <!-- <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker> -->
        </el-col>
        <el-col :span="6">
          <!-- <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select> -->
        </el-col>
      </el-row>
      <el-row class="G-M-top-15">
        <div class="G-align-center">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        </div>
      </el-row>
    </div>
    <div class="G-col-main G-M-top-10">
      <el-row>
          <el-button type="primary">创建文章</el-button>
         <el-button type="success">数据详情</el-button>
      </el-row>
      <el-table
        class="G-M-top-15"
        :data="tableData"
        border
        height="600px"
        style="width: 100%">
        <el-table-column
          fixed
          prop="grade"
          label="濒危等级"
          width="150">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        class="G-M-top-15 G-align-right"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import editors from './edit.vue';
import { a } from '../assets/js/static'
export default {
  data() {
      return {
        bg:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          grade:'',
          alias:'',
          subject:'',
          origin:'',
          info:'',
          images:[],
          livingHabits:'',
          behavior:'',
          features:'',
          environment:'',
          value:'',
          extinctionTime:'',
        }]
      }
    },
  name:'one',
  components: {
    editors
  },
  mounted(){
  },
  methods:{
  },
  computed: {
  }
};
</script>
<style>
  .el-row {
    margin-top:10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-select{
  width: 100%;
}
</style>