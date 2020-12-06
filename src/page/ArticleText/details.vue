<template>
    <div class="G-col-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input  v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-select v-model="form.author" placeholder="请选择作者">
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
        <el-form-item label="营销类型">
         <el-radio-group v-model="form.type" @change="tabType($event)">
          <el-radio :label="1">文章</el-radio>
          <el-radio :label="2">视频</el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch 
            v-model="form.status"
            active-color="#13ce66"
          ></el-switch>
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
        <el-form-item label="详情" v-if="form.type == 1">
          <editors @input="change($event)"></editors>
        </el-form-item>
        <el-form-item label="视频上传" prop="Video" v-else>
          <!-- action必选参数, 上传的地址 -->
            <el-upload class="avatar-uploader el-upload--text" action="/api/upload/video" list-type="picture-card" :show-file-list="false" :on-success="handleVideoSuccess" :before-upload="beforeUploadVideo" :on-progress="uploadVideoProcess">
                <video v-if="videoForm.Video !='' && videoFlag == false" :src="videoForm.Video" class="avatar" controls="controls">您的浏览器不支持视频播放</video>
                <i class="el-icon-plus"></i>
            </el-upload>
            <P class="text">请保证视频格式正确，且不超过10M</P>
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
        videoUploadPercent:"",
        videoFlag:true,
        videoForm:{
          videoUploadId:"",
          video:''
        },
        form: {
          title: '',
          author:'',
          group:'',
          date1:'',
          date2:'',
          type: 1,
          status:false,
          tags:[],
          textarea:'',
        }
      }
    },
    mounted(){
      let id = this.$route.params.id;
      if(!id){
        this.editGetData(id);
      }
    },
    methods: {
      change(e){
          this.form.textarea = e;
      },
      // 编辑 获取数据
      editGetData(id){
          this.$fetch(`/api/articles/${id}`)
          .then((response) => {
            if(response.status){
              this.form = response.data;
            }
          })
      },Lc19990724  
      onSubmit() {
        let currentId = this.$route.params.id;
        currentId != 0 ?  this.funEditData(currentId) : this.funCreateData();
      },
      funEditData(currentId){
        this.$put(`/api/articles/${currentId}`,this.form)
        .then((response) => {
          console.log(response)
        })
      },
      funCreateData(){
        this.$post('/api/articles',this.form)
        .then((response) => {
          console.log(response)
        })
      },
      beforeUploadVideo(file) {
        const isLt10M = file.size / 1024 / 1024  < 10;
        if (['video/mp4', 'video/ogg', 'video/flv','video/avi','video/wmv','video/rmvb'].indexOf(file.type) == -1) {
            this.$message.error('请上传正确的视频格式');
            return false;
        }
        if (!isLt10M) {
            this.$message.error('上传视频大小不能超过10MB哦!');
            return false;
        }
      },
      uploadVideoProcess(event, file, fileList){
          this.videoFlag = true; 
          this.videoUploadPercent = file.percentage.toFixed(0);
      },
      handleVideoSuccess(res, file) {
            //获取上传图片地址
          this.videoFlag = false;
          this.videoUploadPercent = 0;
          if(res.status == 200){
              this.videoForm.videoUploadId = res.data.uploadId;
              this.videoForm.Video = res.data.uploadUrl;
          }else{
              this.$message.error('视频上传失败，请重新上传！');
          }
      },
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
