<template>
  <div class="components" v-if="data !== ''">
    <Head
      @login="logic.onLogin()"
      :user="logic.data.user"
      @registe="logic.onRegiste()"
      @out="logic.onOut()"
    />
    <Swiper />
    <Notic />
  </div>
</template>
<script lang="ts">
import Swiper from "./_components/Swiper.vue";
import Head from "./_components/Head.vue";
import Notic from "./_components/Notic.vue";
import { Vue, Component, Mixins } from "vue-property-decorator";
import DData from "./Data";
import NData, { Param, Data } from "./NData";
import Logic from "./Logic";
import BaseVue from "@/core/base/BaseVue";
@Component({
  components: { Head, Swiper, Notic }
})
export default class Index extends Mixins(BaseVue) {
  logic = new Logic();
  Data = Data;
  async mounted() {
    await this.logic.onBeingCreated();
    this.data = this.logic.data.items[0];
  }
}
</script>
<style lang="css" scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
