<template>
  <div class="components">
    <div class="bottom">
      <div class="input-box" @click="onReply()">
        <text>去评论...</text>
      </div>
      <div class="evaluate">
        <img class="evaluate-icon" src="../_static/msg.png" alt />
        <div class="evaluate-num">6</div>
      </div>
      <div class="zan" @click="onZan()">
        <img v-if="!zan" class="zan-icon" src="../_static/xin.png" alt />
        <img v-if="zan" class="zan-icon" src="../_static/xin-a.png" alt />
      </div>
      <div class="share">
        <img class="share-icon" src="../_static/share.png" alt />
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
    return {
      zan: false
    };
  },
  mounted() {},
  methods: {
    onItem() {
      this.$emit("item", {});
    },
    onZan() {
      this.zan = !this.zan;
    },
    onReply() {
      this.$emit("reply", {});
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
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 100px;
  display: flex;
  flex-direction: row;
  line-height: 100px;
  align-items: center;
  border-top: 1px solid #ccc;
  justify-content: space-between;
  background-color: #ffffff;
}
.input-box {
  width: 300px;
  height: 60px;
  margin-left: 30px;
  background-color: #ccc;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  line-height: 60px;
  color: #666;
}

.evaluate {
  width: 50px;
  height: 50px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
}
.evaluate-icon {
  width: 100%;
  height: 100%;
}
.evaluate-num {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: red;
  border-radius: 50%;
  color: #ffffff;
  font-size: 25px;
  position: absolute;
  top: -10px;
  right: -10px;
}
.evaluate:after {
  content: ""; /*设置内容为空*/
  height: 0; /*高度为0*/
  line-height: 0; /*行高为0*/
  display: block; /*将文本转为块级元素*/
  visibility: hidden; /*将元素隐藏*/
  clear: both; /*清除浮动*/
}
.zan {
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
}
.zan-icon {
  width: 100%;
  height: 100%;
}
.share {
  width: 50px;
  height: 50px;
  margin-right: 30px;
  text-align: center;
  display: flex;
  align-items: center;
}
.share-icon {
  width: 100%;
  height: 100%;
}
</style>
