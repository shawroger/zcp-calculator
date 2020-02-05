<template>
  <el-col :span="6">
    <div id="board-card">
      <el-button @click="cardClick">
        {{name}}
      </el-button>
    </div>
  </el-col>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";


export default createComponent({
  name: "board-card",
  props: {
    name: {
      type: String,
      default: "A"
    },
    value: {
      type: Number,
      default: 1
    }
  },
  setup(props, ctx) {
    const runCard = () => {
      console.log("runCard");
    };
    const cardClick = () => {
      const { value } = props;
      let actionType = "addCards";
      switch (value) {
        case 0:
          actionType = "clearCards";
          break;
        case -1:
          actionType = "backCards";
          break;
        case -2:
          actionType = "runCards";
        default:
      }
      ctx.root.$store.commit(actionType, props);
    };
    return {
      cardClick
    };
  }
});
</script>

<style scoped>
#board-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
.el-button {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
