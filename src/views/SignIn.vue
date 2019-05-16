<template>
  <div id="sign-in">
    <div class="header">
      <h2>C&nbsp;h&nbsp;i&nbsp;k&nbsp;a</h2>
      <h3>登录取Chika，发现更多可信赖的解答！</h3>
    </div>
    <div class="content">
      <el-input v-model="userId" class="interval" placeholder="请输入手机号或邮箱"></el-input>
      <el-input v-model="userPwd" class="interval" placeholder="请输入密码" show-password></el-input>
      <div>
      <el-button type="text" style="padding-left:20px; float:left">手机验证码登陆</el-button>
      <el-button type="text" style="padding-right:20px; float:right; color: gainsboro">忘记密码？</el-button>
      </div>
      <el-button type="primary" class="btn-login">登录</el-button>
      <div>
        <el-button type="text" style="color: grey">二维码登录 · 海外手机登录 · 社交帐号登录</el-button>
      </div>
    </div>
    <div class="footer">
      <span>没有账号？</span><router-link to="/signup">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      userId: '',
      userPwd: ''
    }
  }
}
</script>

<style scoped>
h2{
  margin-top: 50px;
  font-size: 60px;
  line-height: 100px;
  color: #b9c9ed;
}
h3{
  font-size: 20px;
  line-height: 50px;
}
a{
  text-decoration:none;
  color: cornflowerblue;
}
.interval{
  margin-top: 30px;
}
#sign-in{
  height: 550px;
}
#sign-in > .header {
  height: 150px;
}
#sign-in > .content {
  padding: 0 40px 40px 40px;
  height: 290px;
}
#sign-in > .content > .btn-login {
  width: 100%;
  margin-top: 20px;
}
#sign-in > .footer {
  height: 80px;
  background-color: gainsboro;
  font-size: 20px;
  line-height: 80px;
}
</style>
