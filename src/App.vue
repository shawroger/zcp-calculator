<template>
  <div id="app">
    <app-header></app-header>
    <app-list></app-list>
    <app-result></app-result>
    <app-board></app-board>
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import appHeader from "./components/header.vue";
import appBoard from "./components/board.vue";
import appList from "./components/list.vue";
import appResult from "./components/result.vue";
export default createComponent({
  name: "App",
  components: {
    appHeader,
    appBoard,
    appList,
    appResult
  }
});
</script>

<style>
#app {
  max-width: 360px;
  margin: 0 auto;
}
</style>
