<template>
	<div id="app-list">
		<el-card>
			<el-row>
				<el-col style="width: 20%" v-for="index in 10" :key="index">
					<div class="list-item">
						<div class="box">
							<span
								:class="[
									$store.state.cards[index - 1] ? 'is-set' : 'is-default',
								]"
							>
								{{
									$store.state.cards[index - 1]
										? $store.state.cards[index - 1].name
										: "?"
								}}
							</span>
						</div>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({
	name: "app-list",
	setup() {},
});
</script>

<style scoped>
#app-list {
	margin-bottom: -30px;
}
.list-item {
	display: flex;
	justify-content: center;
	align-items: center;
}

.box {
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #dcdfe6;
	font-size: 20px;
	font-family: Tahoma;
	margin: 10px 0;
}

.is-default {
	color: #606266;
}

.is-set {
	color: orange;
}
</style>
