<template>
  <div>
    <div class="G-col-main">
      <el-row :gutter="20">
        <el-col :span="4"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="4"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="4">
          <el-button type="primary">主要按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
        </el-col>
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
        height="600px"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="文章id"
          width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="create_date"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="browse"
          label="浏览人数">
        </el-table-column>
        <el-table-column
          prop="praise"
          label="点赞人数">
        </el-table-column>
        <el-table-column
          prop="collection"
          label="收藏人数">
        </el-table-column>
        <el-table-column
          prop="group"
          label="分组">
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
        </el-table-column>
        
        <el-table-column
          prop="status"
          label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              active-value="true"
              inactive-value="false"
              inactive-color="#999"
              @change="changeSwitch(scope.row)"
              >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
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
          browse:'浏览人数浏览人数浏览人数浏览人数浏览人数',
          praise:'点赞人数',
          collection:'收藏人数',
          group:'分组',
          status:"true",
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
    changeSwitch(row){
      console.log(row);
    }
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