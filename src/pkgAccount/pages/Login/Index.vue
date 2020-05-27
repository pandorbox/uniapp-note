<template>
  <div class="components" v-if="data !== ''">
    <Form @onInput="emit($event,'onInput')" />
    <Submit @submit="emit($event,'onSubmit')" @registe="emit($event,'onRegiste')" />
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
