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
          <el-button type="primary"><router-link :to="{path:'/articleText/details'}">创建文章</router-link></el-button>
         <el-button type="success">数据详情</el-button>
      </el-row>
      <el-table
        class="G-M-top-15"
        :data="tableData"
        border
        fit="true"
        height="600px"
        style="width: 100%">
        <el-table-column
          fixed
          prop="id"
          label="文章id"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="create_date"
          label="创建时间"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="author"
          label="作者"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="browse"
          label="浏览人数"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="praise"
          label="点赞人数"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="collection"
          label="收藏人数"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="group"
          label="分组"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="tags"
          label="标签"
          width="180">
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
import editors from '../../components/edit.vue';
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
          id:'id',
          title:'标题',
          create_date:'创建时间',
          author:'作者',
          browse:'浏览人数',
          praise:'点赞人数',
          collection:'收藏人数',
          group:'分组',
          relation:'关联',
          tags:['1','2','3']
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