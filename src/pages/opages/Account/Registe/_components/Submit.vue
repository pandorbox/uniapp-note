<template>
  <div class="components">
    <div class="submit" @click="submit()">
      <text>registe</text>
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
  width: 80%;
  height: 70px;
  line-height: 70px;
  color: #ffffff;
  background-color: red;
  border-radius: 10px;
  text-align: center;
}
</style>
