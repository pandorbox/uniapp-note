<template>
  <div class="components" v-if="data !== ''">
    <Detail :items="logic.data.needLogin" @item="logic.onItem()" />
    <Evaluate />
    <Bottom @reply="logic.onReply()" />
    <Reply v-if="logic.data.reply" @close="logic.onClose()" />
  </div>
</template>
<script lang="ts">
import Detail from "./_components/Detail.vue";
import Evaluate from "./_components/Evaluate.vue";
import Bottom from "./_components/Bottom.vue";
import Reply from "./_components/Reply.vue";
import { Vue, Component, Mixins } from "vue-property-decorator";
import DData from "./Data";
import NData, { Param, Data } from "./NData";
import Logic from "./Logic";
import BaseVue from "@/core/base/BaseVue";
@Component({
  components: { Detail, Evaluate, Bottom, Reply }
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
