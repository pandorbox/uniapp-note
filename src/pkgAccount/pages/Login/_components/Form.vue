<template>
  <div class="components" @click="onItem()">
    <div class="form">
      <div class="row">
        <div class="tit">账号</div>
        <input type="text" class="input" @input="onInput($event,{type:'account'})" />
      </div>
      <div class="row">
        <div class="tit">密码</div>
        <input type="password" class="input" @input="onInput($event,{type:'password'})" />
      </div>
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
  name: "Test",
  data() {
    return {
      form: {
        account: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {
    onItem() {
      this.$emit("item", {});
    },
    onInput(e, field) {
      let value = "";
      let type = "";
      value = e.target.value;
      type = field.type;
      this.form[type] = value;
      let param = this.form;
      this.$emit("onInput", param);
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
  margin-top: 200px;
}
.form {
  width: 600px;
}
.row {
  width: 600px;
  display: flex;
  flex-direction: row;
  height: 70px;
  line-height: 70px;
  margin-bottom: 50px;
  justify-content: space-between;
}
.tit {
  width: 20%;
  text-align-last: justify;
}
.input {
  margin-left: 5%;
  width: 75%;
  height: 70px;
  line-height: 70px;
  font-size: 30px;
  border: 1px solid #666;
  padding-left: 20px;
}
</style>
