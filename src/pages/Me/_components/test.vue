<template>
  <div class="components" @click="onItem()">
    <div class="img">
      <img :src="user.photo" alt v-if="user.photo" />
      <img src="../_static/user.png" alt v-else />
    </div>
    <div class="name">
      <text>{{ user.name?user.name:'未登录' }}</text>
      <text class="login-out" v-if="user.name">[退出]</text>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  name: "Test",
  data() {
    return {
      defPhoto: "../_static/user.png"
    };
  },
  mounted() {},
  methods: {
    onItem() {
      this.$emit("item", {});
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
}
.img {
  margin-top: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.img > img {
  width: 100%;
  height: 100%;
}
.name {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.login-out {
  margin-left: 40px;
  color: rgb(44, 119, 37);
}
</style>
