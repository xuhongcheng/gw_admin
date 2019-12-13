<template>
  <div class="details">
    <el-page-header @back="goBack" :content="$route.params.id?'编辑':'新增'"></el-page-header>
    <div class="form">
      <el-form ref="checkForm" :model="form" label-width="150px">
        <el-form-item label="名称">
          <el-input type="text" v-model="form.number" placeholder="请输入资源名称"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.college" :src="form.college" class="avatar">
            <i v-else class="avatar-uploader-icon el-icon-plus"></i>
            <div class="el-upload__tip" slot="tip">点击图片上传头像，只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="链接">
          <el-input type="text" v-model="form.name" placeholder="请输入链接"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.state"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="dialogFormEdit()">确 定</el-button>
          <el-button size="small" @click="$router.back()">取 消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import thumb from '../../common/images/avatar.jpg'

  export default {
    name: "Details",
    data() {
      return {
        options: [
          {
            id: 1,
            name: '影视艺术系'
          }, {
            id: 2,
            name: '外语系'
          }
        ],
        formrules: {},
        form: {
          sex: 1,
          state: 1
        }
      }
    },
    watch: {},
    created() {
      if (this.$route.params.id) {
        this.init(this.$route.params.id)
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      init(id) {
        this.form = {
          id: id,
          number: '学术全文数据库',
          college: thumb,
          name: 'https://www.baidu.com',
          creatTime: '2019-11-29 10:26:14',
          state: 1
        }
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      dialogFormEdit() {
        this.$refs['checkForm'].validate((valid) => {
          if (valid) {
            // if (this.form.id) {
            //
            // } else {
            //
            // }
            this.$message.success(this.form.id ? '编辑成功！' : '新增成功')
            this.$router.back()
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .el-input {
    width: 350px;
  }
  .avatar-uploader {

  }
  .form /deep/ .el-upload {
    width: 240px;
    height: 240px;
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .form /deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    font-size: 90px;
    line-height: 240px;
    text-align: center;
  }
  .avatar {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    overflow: hidden;
    display: block;
  }
</style>
