<template>
  <div class="components">
    <div class="head" :class="web?'web':''">
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
    },
    web: {
      type: Boolean,
      default: () => {
        return false;
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
  width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 60px;
}
.head {
  width: 750px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
  line-height: 60px;
  z-index: 10;
  border-bottom: 1px solid rgba(109, 103, 103, 0.867);
}
.web {
  top: 88px;
}
.isLogin {
  width: 690px;
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
  width: 690px;
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
