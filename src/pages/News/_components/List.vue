<template>
  <div class="components">
    <div class="tab">
      <div class="all" :class="tab==1?'ontab':''" @click="onTab(1)">
        <text>全部</text>
      </div>
      <div class="unread" :class="tab==2?'ontab':''" @click="onTab(2)">
        <text>未读({{listtwo.length}})</text>
      </div>
    </div>
    <div class="list-all" v-if="tab==1">
      <div class="item" v-for="(item,index) in listone" :key="index">
        <div class="item-tit">{{item.tit}}</div>
        <div class="item-msg">{{item.msg}}</div>
      </div>
    </div>
    <div class="list-unread" v-else>
      <div class="item" v-for="(item,index) in listtwo" :key="index">
        <div class="item-tit">{{item.tit}}</div>
        <div class="item-msg">{{item.msg}}</div>
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
      tab: 1,
      listone: [
        { tit: "系统通知", msg: "你关注的‘@卫栖梧嗯’笔友发布了新笔记" },
        { tit: "系统通知", msg: "你发布的《css随手记》已通过审核" },
        {
          tit: "系统通知",
          msg:
            "你发布的《css随手记》已通过审核,你发布的《css随手记》已通过审核,你发布的《css随手记》已通过审核,你发布的《css随手记》已通过审核"
        }
      ],
      listtwo: [
        { tit: "系统通知", msg: "你发布的《css随手记》已通过审核" },
        { tit: "互动消息", msg: "‘@李子柒’评论了你的《css随手记》" }
      ]
    };
  },
  mounted() {},
  methods: {
    onTab(index) {
      this.tab = index;
    },
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
.tab {
  width: 100%;
  line-height: 70px;
  background-color: #ddd;
  display: flex;
}
.all,
.unread {
  width: 50%;
  text-align: center;
  height: 100%;
}
.ontab {
  background-color: rgb(104, 101, 101);
  color: #ffffff;
}
.list-all,
.list-unread {
  width: 100%;
  color: #ffffff;
}
.item {
  width: 100%;
  margin-top: 20px;
  background-color: rgb(104, 101, 101);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.item-tit {
  width: 690px;
  border-bottom: 1px solid #ffffff;
  margin-bottom: 10px;
}
.item-msg {
  width: 690px;
  font-size: 25px;
  line-height: 30px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
</style>
