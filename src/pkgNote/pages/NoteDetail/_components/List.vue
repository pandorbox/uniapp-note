<template>
  <div class="components">
    <div class="tit">
      <text>评价</text>
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
  name: "Evaluate",
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
  width: 100%;
}
.tit {
  width: 690px;
  margin-top: 20px;
}
</style>
