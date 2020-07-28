<template>
  <div id="login" @mouseenter.stop="mouseEnterLogin" @mouseleave.stop="mouseLeaveLogin" @mouseover="mouseover">
    <div class="login-head">@自由人.com</div>
    <el-form
      label-position="top"
      label-width="80px"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
    >
      <el-form-item label="账户" prop="user">
        <el-input v-model="loginForm.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psw">
        <el-input type="password" v-model="loginForm.psw"></el-input>
      </el-form-item>
      <el-form-item class="login-btn">
        <el-button round @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      labelPosition: "right",
      loginForm: {
        user: "",
        psw: ""
      },
      loginRules: {
        user: [
          { required: true, message: "请输入账户", trigger: "blur" },
          { min: 5, max: 15, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ],
        psw: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 15, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    mouseEnterLogin() {
      this.$emit("mouse", "mouseEnterLogin");
    },
    mouseLeaveLogin() {
      this.$emit("mouse", "mouseLeaveLogin");
    },
    mouseover(e){
      console.log(e)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.$router.push({name:'index',params:{by:'byLogin'}})
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
#login {
  min-width: 300px;
  position: absolute;
  z-index: 9;
  padding: 20px 50px;
  
  // box-shadow: 0px 0px 10px darkgrey;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  right: 15%;
  top: 28%;
  /deep/.el-form-item__label {
    color: white;
  } 
  .login-head {
    color: white;
    text-align: center;
    font-size: 25px;
    height: 50px;
    line-height: 50px;
  }
  .login-btn {
    text-align: center;
    :hover button{
      box-shadow: 0px 0px 10px #41555d;
      color: #41555d;
    }
    button {
      box-shadow: 0px 0px 10px darkgrey;
      background: transparent;
      outline: none;
      border: none;
      min-width: 180px;
      margin-top: 20px;
      // color: white;
    }
  }
}
</style>