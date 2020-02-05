import Vue from "vue";
import { ZCP } from "./zcp";

const zcp = new ZCP();
Vue.filter("toList", (arr: Array<number>) =>
	JSON.stringify(arr.map(v => zcp.numsToCard(v)))
		.slice(1, -1)
		.replace(/"/g, "")
);
