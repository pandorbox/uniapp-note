<template>
  <div class="components">
    <div class="items" v-for="(items,indexs) in lists" :key="indexs">
      <div class="tab-tit" @click="onTab(indexs)">
        <text class="tab-tit-text">{{items.type}}</text>
        <img class="icon-down" src="../_static/down.png" alt v-if="tabIndex!==indexs" />
      </div>
      <div class="list" v-if="tabIndex==indexs">
        <div class="item" v-for="(item,index) in items.list" :key="index">
          <!-- <image class="item-img" :src="item.img" mode="aspectFill" alt /> -->
          <div class="text">
            <text class="text-tit" @click="onItem(item.id)">{{item.tit}}</text>
            <text class="text-msg" @click="onItem(item.id)">{{item.msg}}</text>
            <!-- 底部判断显示内容 -->
            <div class="bottom" v-if="item.state=='已发布'">
              <img class="icon-look" src="../_static/look.png" alt />
              <text>{{item.look}}</text>
              <img class="icon-zan" src="../_static/zan.png" alt />
              <text>{{item.zan}}</text>
            </div>
            <div class="bottom bottom-btn" v-if="item.state=='未发布'">
              <div class="state state-fabu">
                <text>发布</text>
              </div>
            </div>
            <div class="bottom bottom-btn" v-if="item.state=='审核中'">
              <div class="state">
                <text>发布审核中</text>
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
  name: "List",
  data() {
    return {
      tabIndex: 0,
      lists: [
        {
          type: "最近添加",
          list: [
            {
              id: 7,
              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题",
              msg: "这是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "未发布"
            },
            {
              id: 7,
              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题标题这是标题标题这是标题",
              msg:
                "这是内容这是内容这是内是内容这是内容这是内是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "已发布"
            },
            {
              id: 7,
              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题标题这是标题标题这是标题",
              msg:
                "这是内容这是内容这是内是内容这是内容这是内是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "已发布"
            },
            {
              id: 7,

              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题标题这是标题标题这是标题",
              msg:
                "这是内容这是内容这是内是内容这是内容这是内是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "审核中"
            }
          ]
        },
        {
          type: "Css",
          list: [
            {
              id: 7,

              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题",
              msg: "这是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "已发布"
            },
            {
              id: 7,

              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题标题这是标题标题这是标题",
              msg:
                "这是内容这是内容这是内是内容这是内容这是内是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "审核中"
            }
          ]
        },
        {
          type: "Vue",
          list: [
            {
              id: 7,

              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题",
              msg: "这是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "已发布"
            },
            {
              id: 7,

              img: "http://127.0.0.1:3000/img/bg/tuijian.jpg",
              tit: "这是标题这是标题标题这是标题标题这是标题",
              msg:
                "这是内容这是内容这是内是内容这是内容这是内是内容这是内容这是内容这是内容这是内容这是内容",
              look: 29,
              zan: 10,
              state: "已发布"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onTab(index) {
      this.tabIndex = index;
    },
    onItem(param) {
      this.$emit("item", { id: param });
    }
  }
};
</script>
<style lang="css" scoped>
.components,
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
}
.tab-tit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 70px;
  background-color: #ddd;
  margin-top: 40px;
}
.icon-down {
  margin-right: 30px;
  width: 50px;
  height: 50px;
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
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  line-height: 50px;
  font-size: 25px;
}
.bottom-btn {
  width: 100%;
}
.state {
  width: 50%;
  height: 100%;
  background-color: #666;
  color: #ffffff;
  text-align: center;
}
.state-fabu {
  background-color: rgb(219, 74, 74);
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
