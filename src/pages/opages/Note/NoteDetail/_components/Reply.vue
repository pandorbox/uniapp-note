<template>
  <div class="components">
    <div class="masks" @click="close()"></div>
    <div class="reply">
      <div class="text-input">
        <textarea class="input" @input="onInput($event,{type:'reply'})"></textarea>
      </div>
      <div class="btn">
        <text class="submit" :class="reply!==''?'asubmit':''">发表</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mask: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  name: "Masks",
  data() {
    return {
      reply: ""
    };
  },
  mounted() {},
  methods: {
    onItem() {
      this.$emit("item", {});
    },
    close() {
      this.$emit("close", {});
    },
    onInput(e, field) {
      this.reply = e.target.value;
      this.$emit("onInput", this.reply);
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
.masks {
  height: 100%;
  width: 750px;
  position: fixed;
  background: rgb(41, 40, 40);
  opacity: 0.2;
  bottom: 0px;
}
.reply {
  height: 700px;
  width: 750px;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-input {
  margin-top: 20px;
  width: 690px;
  background-color: rgb(238, 238, 238);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  width: 650px;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
}
.btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.submit {
  width: 100px;
  height: 50px;
  background-color: #ccc;
  margin-right: 30px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
  font-size: 25px;
  border-radius: 20px;
  color: #666;
}
.asubmit {
  background-color: rgb(20, 182, 60);
  color: #ffffff;
}
</style>
