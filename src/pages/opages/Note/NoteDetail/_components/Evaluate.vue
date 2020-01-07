<template>
  <div class="components">
    <div class="tit">
      <text>评论</text>
      <div class="list">
        <div class="item" v-for="(item,index) in 5" :key="index">
          <img class="photo" src="../_static/def.png" alt />
          <div class="text">
            <text class="name">qjkang</text>
            <text class="msg">这是评论信息这是评论信，息这是评论信息这是，是评论信息这是评论信息</text>
            <div class="bottom">
              <text class="time">2020-01-01 ·</text>
              <div class="reply">
                <text>回复</text>
              </div>
            </div>
          </div>
        </div>
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
  border-top: 1px solid #ccc;
  margin-top: 20px;
}
.tit {
  width: 690px;
  margin-top: 20px;
}
.list {
  width: 690px;
  display: flex;

  flex-direction: column;
  align-items: center;
}
.item {
  width: 690px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.photo {
  width: 60px;
  height: 60px;
}
.text {
  width: 610px;
  display: flex;
  flex-direction: column;
}
.name {
  font-size: 25px;
  color: rgb(31, 141, 231);
}
.msg {
  font-size: 28px;
  margin-top: 10px;
}
.bottom {
  display: flex;
  font-size: 25px;
  color: #ccc;
  height: 50px;
  align-items: center;
}
.reply {
  margin-left: 20px;
  width: 100px;
  height: 40px;
  background-color: #ccc;
  color: #666;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
}
.reply-detail {
  width: 750px;
  height: 700px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  z-index: 10;
}
</style>
