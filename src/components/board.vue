<template>
	<div id="app-board">
		<el-card class="box-card">
			<el-row>
				<board-card
					v-for="item in cards"
					:key="item.name"
					:name="item.name"
					:value="item.value"
				/>
			</el-row>
		</el-card>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import boardCard from "./card.vue";
import { cards } from "../utils/cards";
export default createComponent({
	name: "app-board",
	components: {
		boardCard
	},
	setup() {
		return {
			cards
		};
	}
});
</script>

<style scoped>
#app-board {
	display: flex;
	justify-content: center;
	margin-bottom: 35px;
}

.box-card {
	padding: 10px;
	width: 100%;
}
</style>
