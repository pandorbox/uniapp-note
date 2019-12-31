<template>
  <div class="components">
    <div class="notic">
      <div class="icon">
        <img class="icon-notic" src="../_static/notic.png" alt />
      </div>
      <swiper
        class="swiper"
        vertical="true"
        :indicator-dots="false"
        autoplay="true"
        interval="3000"
        circular="true"
      >
        <swiper-item>
          <view class="swiper-item">
            <view class="text">通告一发生的开发建设的</view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <view class="text">通告一发生的开发建设的发生的开发发生dddddd的开发发生的开发发生的开发</view>
          </view>
        </swiper-item>
      </swiper>
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
  name: "Notic",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onItems() {
      this.$emit("items", {});
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
.notic {
  width: 690px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon-notic {
  width: 30px;
  height: 30px;
}
.swiper {
  margin-left: 20px;
  width: 100%;
  height: 50px;
}
.swiper-item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
