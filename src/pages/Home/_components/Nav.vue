<template>
  <div class="components">
    <div class="items">
      <div class="item" v-for="(item,index) in navs" :key="index">
        <img class="nav-icon" src="../_static/nav.png" alt />
        <text class="nav-tit">{{item.tit}}</text>
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
  name: "Test",
  data() {
    return {
      navs: [
        { icon: "../_static/notic.png", tit: "导航一" },
        { icon: "../_static/notic.png", tit: "导航二" },
        { icon: "../_static/notic.png", tit: "导航三" },
        { icon: "../_static/notic.png", tit: "导航四" },
        { icon: "../_static/notic.png", tit: "导航五" },
        { icon: "../_static/notic.png", tit: "导航六" }
      ]
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
.items {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #ddd;
  padding-bottom: 20px;
}
.item {
  width: 30%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
}
.nav-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
