<template>
  <div id="app-result">
    <el-collapse :value="$store.state.openPanel ? 1 : 0" @change="changePanel">
      <el-collapse-item :name="1">
        <el-table :data="$store.state.result" style="width: 100%" stripe>
          <el-table-column label="分组一" align="center">
            <template v-slot="scope">
              <p>{{ scope.row[0] | toList }}</p>
            </template>
          </el-table-column>
          <el-table-column label="分组二" align="center">
            <template v-slot="scope">
              <p>{{ scope.row[1] | toList}}</p>
            </template>
          </el-table-column>
          <el-table-column label="推荐指数" align="center">
            <template v-slot="scope">
              <el-rate
                disabled
                show-score
                :value="Math.floor(5*(scope.row[0].length + scope.row[1].length)/($store.state.cards.length))"
                :colors="colors"
              ></el-rate>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({
  name: "app-result",
  setup(props, ctx) {
    const changePanel = () => {
      ctx.root.$store.commit("setPanel");
    };
    const colors = ["#99A9BF", "#F7BA2A", "#FF9900"];
    return {
      colors,
      changePanel
    };
  }
});
</script>

<style scoped>
#app-result {
  margin-top: 30px;
}
</style>
