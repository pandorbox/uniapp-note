<template>
  <div class="components">
    <div class="button">
      <div class="del">
        <text>删除选中</text>
      </div>
      <div class="del-all">
        <text>清空全部</text>
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
    }
  },
  name: "Button",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 100px;
}
.button {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 80px;
  justify-content: space-between;
}
.del {
  width: 50%;
  height: 100%;
  background-color: #666;
  color: #ffffff;
  text-align: center;
}
.del-all {
  width: 50%;
  height: 100%;
  background-color: red;
  color: #ffffff;
  text-align: center;
}
</style>
