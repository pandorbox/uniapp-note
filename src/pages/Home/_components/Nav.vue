<template>
  <div class="components">
    <div class="items">
      <div class="item" v-for="(item,index) in navs" :key="index">
        <image class="nav-icon" :src="item.icon" alt />
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
        { icon: "../_static/nav-css.png", tit: "Css" },
        { icon: "../_static/nav-html.png", tit: "Html" },
        { icon: "../_static/nav-java.png", tit: "Java" },
        { icon: "../_static/nav-vue.png", tit: "Vue" },
        { icon: "../_static/nav-script.png", tit: "JavaScript" },
        { icon: "../_static/nav-other.png", tit: "其他" }
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
  width: 750px;
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
