<template>
  <div class="components">
    <div class="add" @click="onAdd()">
      <img class="icon-add" src="../_static/add.png" alt />
      <text>新增</text>
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
  name: "Add",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onAdd() {
      this.$emit("add", {});
    }
  }
};
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}
.add {
  position: fixed;
  bottom: calc(var(--window-bottom) + 20px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}
.icon-add {
  width: 40px;
  height: 40px;
}
</style>
