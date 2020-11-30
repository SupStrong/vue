<template>
  <div>
  <quill-editor v-model="text"  :options="quillConfigData" ref="myQuillEditor" @change="onEditorChange($event)">
  </quill-editor>
  </div>
</template>

<script>
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  name: 'editor',
  props: {
    value: Object
  },
  components:{
    quillEditor
  },
  data() {
    return {
      quillConfigData: {
        	placeholder: '请输入哦',
	        theme: 'snow', // 主题
          modules: {
            ImageExtend: {
                loading: true, //是否显示上传加载
                name: 'file', //设置上传参数名
                headers: (xhr)=>{
                },
                action: "/backend/upload", //设置上传文件请求路径
                response: (res) => { //这里返回的你上传之后的图片地址
                    return res.data
                }
            },
            toolbar: {
                container: container,
                handlers: {
                    'image': function () {
                        QuillWatch.emit(this.quill.id)
                    }
                }
            }
          }
	    }
    }
  },
  mounted() {
  },
  methods:{
  //直接打印出富文本内容
  onEditorChange(e){
    console.log(e);
  }
  }
}
</script>
<style scoped>
.editor{
    height: 300px;
}
</style>