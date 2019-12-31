<template>
  <div class="components" v-if="data !== ''">
    <Test :user="logic.data.user" @item="logic.onItem()" />
    <Cell />
  </div>
</template>
<script lang="ts">
import Test from "./_components/test.vue";
import Cell from "./_components/cell.vue";
import { Vue, Component, Mixins } from "vue-property-decorator";
import DData from "./Data";
import NData, { Param, Data } from "./NData";
import Logic from "./Logic";
import BaseVue from "@/core/base/BaseVue";
@Component({
  components: { Test, Cell }
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
  width: 750px;
}
</style>
