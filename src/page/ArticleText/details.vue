<template>
    <div class="G-col-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input  v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-select v-model="form.region" placeholder="请选择作者">
            <el-option label="小猪" value="小猪"></el-option>
            <el-option label="小狗" value="小狗"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.group" placeholder="请选择分类">
            <el-option label="科普知识" value="1"></el-option>
            <el-option label="萌宠玩具" value="2"></el-option>
            <el-option label="萌宠美食" value="3"></el-option>
            <el-option label="养宠贴士" value="4"></el-option>
            <el-option label="风味肉食" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
            <span>-</span>
            <el-time-picker placeholder="选择时间" v-model="form.date2"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="form.status"></el-switch>
        </el-form-item>
        <el-form-item label="标签">
          <el-checkbox v-model="checked" value="1">备选项</el-checkbox>
          <el-checkbox v-model="checked" value="2">备选项</el-checkbox>
          <el-checkbox v-model="checked" value="3">备选项</el-checkbox>
        </el-form-item>
        <el-form-item label="关联">
          <el-select v-model="form.group" placeholder="请选择关联">
            <el-option label="科普知识" value="1"></el-option>
            <el-option label="萌宠玩具" value="2"></el-option>
            <el-option label="萌宠美食" value="3"></el-option>
            <el-option label="养宠贴士" value="4"></el-option>
            <el-option label="风味肉食" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详情">
          <editors @input="change($event)"></editors>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button><router-link to="/article/list">返回</router-link></el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
import editors from '../../components/edit.vue';
  export default {
    data() {
      return {
        form: {
          title: '',
          create_date: '',
          group:'',
          status:'',
          textarea:'',
          tags:[],
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      change(e){
          this.form.textarea = e;
      },
      onSubmit() {
        console.log(this.form.textarea,'submit!');
      }
    },
    components:{
      editors
    }
  }
</script>
<style>
.el-input{
  width: 260px;
}
</style>
