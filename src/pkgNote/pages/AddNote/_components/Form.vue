<template>
  <div class="components">
    <div class="row">
      <text class="row-tit">请选择笔记类型</text>
      <div class="row-type">
        <div
          class="type-item"
          :class="index==typeIndex?'ontype':''"
          v-for="(item,index) in types"
          :key="index"
          @click="onType(index)"
        >{{item}}</div>
      </div>
    </div>
    <div class="row">
      <text class="row-tit">标题</text>
      <input class="row-input" type=" text" />
    </div>
    <div class="row">
      <text class="row-tit">内容（说明）</text>
      <input class="row-input" type=" text" />
    </div>
    <div class="row">
      <text class="row-tit">代码</text>
      <textarea class="row-textarea" name id cols="30" rows="10"></textarea>
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
  name: "Form",
  data() {
    return {
      types: ["Css", "JavaScript", "Html", "Vue", "Uni-app", "TypeScript"],
      typeIndex: 100
    };
  },
  mounted() {},
  methods: {
    onItem() {
      this.$emit("item", {});
    },
    onType(index) {
      this.typeIndex = index;
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
.row {
  width: 690px;
  display: flex;
  flex-direction: column;
}
.row-tit {
  width: 100%;
  display: block;
  color: rgb(15, 162, 182);
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 20px;
}
.row-type {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.type-item {
  line-height: 40px;
  font-size: 25px;
  background-color: #666;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px;
}
.ontype {
  background-color: rgb(52, 201, 151);
}
.row-input {
  width: 100%;
  line-height: 50px;
  border-bottom: 1px solid rgb(52, 201, 151);
}
.row-textarea {
  width: 100%;
  border: 1px solid rgb(52, 201, 151);
}
</style>
