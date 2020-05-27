<template>
  <div class="page" v-if="data !== ''">
    <!-- <Head
      @login="emit($event,'onLogin')"
      :user="Ldata.user"
      @registe="emit($event,'onRegiste')"
      @out="emit($event,'onOut')"
      :web="Ldata.web"
    /> -->
    <Swiper />
    <Notic />
    <Nav @item="emit($event,'onNav')" />
    <Listone @item="emit($event,'onItem')" />
    <Listtwo @item="emit($event,'onItem')" />
  </div>
</template>
<script lang="ts">
import Swiper from "./_components/Swiper.vue";
import Head from "./_components/Head.vue";
import Notic from "./_components/Notic.vue";
import Nav from "./_components/Nav.vue";
import Listone from "./_components/Listone.vue";
import Listtwo from "./_components/Listtwo.vue";

import { Vue, Component, Mixins } from "vue-property-decorator";
import DData from "./Data";
import NData, { Param, Data } from "./NData";
import Logic from "./Logic";
import BaseVue from "@qjk/npm-pack/dist/core/base/BaseVue";
@Component({
  components: { Head, Swiper, Notic, Nav, Listone, Listtwo }
})
export default class Index extends Mixins(BaseVue) {
  logic = new Logic();
  Data = Data;
  async mounted() {
    await this.logic.onBeingCreated();
    this.Ldata = this.logic.data;
    this.Ndata = Data;
  }
}
</script>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  margin-bottom: 40px;
}
</style>
