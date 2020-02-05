<template>
  <div id="app-header">
    <img v-no-drag src="/zcp.png" class="logo" />
    <el-divider>
      <span class="el-divider-text">{{title}}</span>
    </el-divider>
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
export default createComponent({
  name: "app-header",
  setup() {
    const title = "张昌蒲计算器";
    return {
      title
    };
  }
});
</script>

<style scoped>
#app-header {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
}
.logo {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.el-divider-text {
  color: grey;
}
</style>
