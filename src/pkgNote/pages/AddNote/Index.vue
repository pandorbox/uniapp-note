<template>
  <div class="components" v-if="data !== ''">
    <Form :items="Ldata.items" @type="emit($event,'onType')" @input="emit($event,'onInput')" />
    <Submit @add="emit($event,'onAdd')" @addPush="emit($event,'onAddPush')" />
  </div>
</template>
<script lang="ts">
import Form from "./_components/Form.vue";
import Submit from "./_components/Submit.vue";

import { Vue, Component, Mixins } from "vue-property-decorator";
import DData from "./Data";
import NData, { Param, Data } from "./NData";
import Logic from "./Logic";
import BaseVue from "@qjk/npm-pack/dist/core/base/BaseVue";
@Component({
  components: { Form, Submit }
})
export default class Index extends Mixins(BaseVue) {
  Data = Data;
  logic: any;
  async beforeCreate() {
    this.logic = new Logic();
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
