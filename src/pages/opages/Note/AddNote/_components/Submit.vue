<template>
  <div class="components">
    <div class="btn">
      <div class="btn-one">添加并发布</div>
      <div class="btn-two">添加</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  name: "Submit",
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
  height: 80px;
}
.btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  line-height: 80px;
  color: #ffffff;
}
.btn-one {
  width: 50%;
  text-align: center;
  background-color: rgb(52, 201, 151);
}
.btn-two {
  width: 50%;
  text-align: center;
  background-color: rgb(15, 162, 182);
}
</style>
