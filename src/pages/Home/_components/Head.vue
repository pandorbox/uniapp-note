<template>
  <div class="components">
    <div v-if="!user.name==''" class="isLogin">
      <text class="user">{{user.name}}</text>
      <text>|</text>
      <text class="loginout" @click="out()">退出</text>
    </div>
    <div v-else class="noLogin">
      <text class="login" @click="login()">登录</text>
      <text>|</text>
      <text class="registe" @click="registe()">注册</text>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    user: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  name: "Head",
  data() {
    return {
      isLogin: false
    };
  },
  mounted() {},
  methods: {
    login() {
      this.$emit("login", {});
    },
    registe() {
      this.$emit("registe", {});
    },
    out() {
      this.$emit("out", {});
    }
  }
};
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: rgb(181, 136, 211);
  line-height: 60px;
}
.isLogin {
  width: 92%;
  text-align: right;
}
.user {
  margin-right: 10px;
  color: #ffffff;
  font-size: 25px;
}
.loginout {
  margin-left: 10px;
  color: red;
  font-size: 25px;
}
.noLogin {
  width: 92%;
  text-align: right;
}
.login {
  margin-right: 10px;
  color: #ffffff;
  font-size: 25px;
}
.registe {
  margin-left: 10px;
  color: red;
  font-size: 25px;
}
</style>
