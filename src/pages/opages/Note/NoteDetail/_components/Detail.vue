<template>
  <div class="components">
    <div class="article">
      <text class="article-tit">这是标题这是标题这是标题</text>
      <div class="article-author">
        <img class="photo" src="../_static/def.png" alt />
        <div class="text">
          <text class="text-name">qjkang</text>
          <div class="text-other">
            <text class="time">2020-01-01</text>
            <text class="look">阅读: 2w</text>
          </div>
        </div>
        <div class="follow">关注</div>
      </div>
      <text
        class="content"
      >这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容这是说明内容，这是说明内容这是说明内容，这是说明内容这是说明内容这是说明内容，这是说明内容这是说明内容</text>
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
  name: "Detail",
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
.components,
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.article-tit {
  width: 690px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 40px;
  font-weight: bold;
  line-height: 100px;
}
.article-author {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 690px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.text {
  width: 500px;
  margin-left: 20px;
}
.text-other {
  margin-top: 10px;
  line-height: 30px;
  font-size: 25px;
  color: #666;
  width: 690px;
}
.look {
  margin-left: 20px;
}
.follow {
  width: 90px;
  line-height: 50px;
  font-size: 25px;
  text-align: center;
  background-color: rgb(70, 107, 209);
  color: white;
  border-radius: 10px;
}
.content {
  margin-top: 20px;
  width: 690px;
  text-indent: 2em;
}
.bottom {
  width: 690px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
</style>
