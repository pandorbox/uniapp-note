<template>
  <div class="components">
    <div class="cell">
      <div
        class="item"
        :class="index==items.length-1?'noborder':''"
        v-for="(item,index) in items"
        :key="index"
      >
        <text>{{item}}</text>
        <img class="icon-row" src="../_static/row.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // items: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   }
    // }
  },
  name: "Cell",
  data() {
    return {
      items: ["个人资料", "我的关注", "我的钱包", "充值中心", "联系客服"]
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
.cell {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
}
.item {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  line-height: 80px;
  border-bottom: 1px solid #ffffff;
}
.noborder {
  border-bottom: none !important;
}
.icon-row {
  width: 60px;
  height: 60px;
}
</style>
