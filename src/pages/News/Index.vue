<template>
  <div class="components" v-if="data !== ''">
    <List @chooseOne="emit($event,'onChooseOne')" @chooseTwo="emit($event,'onChooseTwo')" />
    <Bottom @del="emit($event,'onDel')" @delall="emit($event,'onDelAll')" />
  </div>
</template>
<script lang="ts">
import List from "./_components/List.vue";
import Bottom from "./_components/Bottom.vue";

import { Vue, Component, Mixins } from "vue-property-decorator";
import DData from "./Data";
import NData, { Param, Data } from "./NData";
import Logic from "./Logic";
import BaseVue from "@qjk/npm-pack/dist/core/base/BaseVue";
@Component({
  components: { List, Bottom }
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
.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
}
</style>
