<template>
  <div class="components">
    <div class="bottom">
      <div class="del" @click="onDel()">
        <text>删除选中</text>
      </div>
      <div class="del-all" @click="onDelall()">
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
  name: "Bottom",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onDel() {
      this.$emit("del", {});
    },
    onDelall() {
      this.$emit("delall", {});
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
.bottom {
  width: 750px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: calc(var(--window-bottom));
  line-height: 80px;
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
