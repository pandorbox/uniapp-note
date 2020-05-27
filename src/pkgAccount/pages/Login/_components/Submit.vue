<template>
  <div class="components">
    <div class="submit" @click="submit()">
      <text>登录</text>
    </div>
    <div class="bottom">
      <text class="bottom-text" @click="onForgetPwd()">忘记密码?</text>
      <text class="bottom-text" @click="onRegiste()">注册</text>
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
    }
  },
  name: "Test",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    submit() {
      this.$emit("submit", {});
    },
    onRegiste() {
      this.$emit("registe", {});
    }
  }
};
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  margin-top: 100px;
}
.submit {
  width: 600rpx;
  height: 70px;
  line-height: 70px;
  color: #ffffff;
  background-color: red;
  border-radius: 10px;
  text-align: center;
}
.bottom {
  margin-top: 30px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  color: red;
}
</style>
