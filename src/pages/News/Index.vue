<template>
  <div class="components" v-if="data !== ''">
    <List />
  </div>
</template>
<script lang="ts">
import List from "./_components/List.vue";
import { Vue, Component, Mixins } from "vue-property-decorator";
import DData from "./Data";
import NData, { Param, Data } from "./NData";
import Logic from "./Logic";
import BaseVue from "@/core/base/BaseVue";
@Component({
  components: { List }
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
