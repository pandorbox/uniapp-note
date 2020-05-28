<template>
  <div class="components">
    <div class="tab-tit">
      <text class="tab-tit-text">最新笔记</text>
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) in lists" :key="index" @click="onItem()">
        <!-- <image class="item-img" :src="item.img" mode="aspectFill" alt /> -->
        <div class="text">
          <text class="text-tit">{{item.tit}}</text>
          <text class="text-msg">{{item.msg}}</text>
          <div class="bottom">
            <img class="icon-look" src="../_static/look.png" alt />
            <text>{{item.look}}</text>
            <img class="icon-zan" src="../_static/zan.png" alt />
            <text>{{item.zan}}</text>
          </div>
        </div>
      </div>
      <div class="more">
        <text>更多</text>
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
  name: "List",
  data() {
    return {
      lists: [
        {
          img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
          tit: "这是标题这是标题",
          msg: "这是内容这是内容这是内容这是内容这是内容这是内容",
          look: 29,
          zan: 10
        },
        {
          img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
          tit: "这是标题这是标题标题这是标题标题这是标题",
          msg:
            "这是内容这是内容这是内是内容这是内容这是内是内容这是内容这是内容这是内容这是内容这是内容",
          look: 29,
          zan: 10
        },
        {
          img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
          tit: "这是标题这是标题",
          msg: "这是内容这是内容这是内容这是内容这是内容这是内容",
          look: 29,
          zan: 10
        }
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
.tab-tit {
  width: 100%;
  line-height: 70px;
  background-color: #ddd;
  margin-top: 40px;
}
.list {
  width: 690px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ddd;
}
.item-img {
  width: 200px;
  height: 100%;
}
.text {
  width: 690px;
  height: 200px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-tit {
  display: block;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 10px;
  margin-right: 10px;
}
.tab-tit-text {
  margin-left: 30px;
}
.text-msg {
  display: block;
  width: 100%;
  height: 90px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  font-size: 25px;
  line-height: 30px;
  color: #666;
}
.bottom {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
  line-height: 50px;
  font-size: 25px;
}
.icon-look,
.icon-zan {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.icon-zan {
  margin-left: 20px;
}
.more {
  margin-top: 40px;
  width: 200px;
  line-height: 60px;
  background-color: #ddd;
  color: #666;
  text-align: center;
  font-size: 28px;
  border-radius: 5px;
}
</style>
