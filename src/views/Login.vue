<template>
  <div class="start">
    <div class="login">
      <div class="box">
        <p class="table">Login</p>
        <br />
        <input
          type="text"
          name="phone"
          class="phone"
          v-model="phone"
          placeholder="请输入手机号码"
        />
        <input
          type="password"
          name="passworld"
          class="passworld"
          v-model="password"
          placeholder="请输入密码"
        />
        <br />
        <a href="#" class="go" @click="$router.push('/')">GO</a>
      </div>
    </div>
  </div>
</template>
<script>
import { getLoginUser } from "@/request/api/home.js";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    // Login: async function () {
    //   let res = await this.$store.dispatch("getLogin", {
    //     phone: this.phone,
    //     password: this.password,
    //   });
    //   console.log(res);
    //   if (res.data.code === 200) {
    //     //如果返回的code等于200，说明登录成功，就跳转个人中心页面
    //     this.$store.commit("updateIsLogin", true);
    //     this.$store.commit("updateToken", res.data.token);
    //     let result = await getLoginUser(res.data.account.id);
    //     console.log(result);
    //     this.$store.commit("updateUser", result);
    //     this.$router.push("/infoUser");
    //   } else {
    //     alert("手机号码或者密码错误");
    //     this.password = "";
    //   }
    // },
  },
};
</script>
<style  scoped>
.start {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/yellow.jpg");
  background-size: cover;
}
.login {
  width: 100vw;
  padding: 10px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.4)
  );
  /* 使背景模糊化 */
  backdrop-filter: blur(4px);
  box-shadow: 0 0 20px #a29bfe;
  /* border-radius: 15px; */
}

.table {
  font: 900 40px "";
  text-align: center;
  letter-spacing: 5px;
  color: #3d3d3d;
}

.box {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.box input {
  width: 400px;
  height: 100%;
  margin-bottom: 20px;
  outline: none;
  border: 0;
  padding: 10px;
  background-color: transparent;
  border-bottom: 3px solid rgb(150, 150, 240);
  font: 900 16px "";
}

.go {
  text-align: center;
  display: block;
  height: 32px;
  padding: 2px;
  font: 900 20px "";
  border-radius: 10px;
  margin-top: 20px;
  color: #fff;
  letter-spacing: 3px;
  background-image: linear-gradient(to left, #d2e748, #7ed6fb);
}
</style>
