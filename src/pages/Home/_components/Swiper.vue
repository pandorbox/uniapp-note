<template>
  <div class="components" @click="onItems()">
    <swiper class="swiper" :indicator-dots="true" :autoplay="false" interval="3000" circular="true">
      <swiper-item>
        <view class="swiper-item">
          <img class="img-swiper" src="http://127.0.0.1:3000/img/banner/banner1.jpg" alt />
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <img class="img-swiper" src="http://127.0.0.1:3000/img/banner/banner3.jpg" alt />
        </view>
      </swiper-item>
    </swiper>
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
  name: "Swiper",
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
.swiper {
  width: 100%;
}

.img-swiper {
  width: 100%;
}
</style>
