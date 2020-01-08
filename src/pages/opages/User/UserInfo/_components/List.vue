<template>
  <div class="components" @click="onItem()">
    <div class="row">
      <text>头像</text>
      <img class="photo" src alt />
      <img class="icon-row" src alt />
    </div>
    <div class="row">
      <text>名字</text>
      <text>qjkang</text>
      <img class="icon-row" src alt />
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
  name: "List",
  data() {
    return {};
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
  width: 750px;
}
</style>
