import Vue from "vue";
import Vuex from "vuex";
import { ZCP } from "../utils/zcp";

Vue.use(Vuex);
const zcp = new ZCP();

interface Card {
	name: string;
	value: number;
}

export default new Vuex.Store({
	state: {
		cards: [] as Array<Card>,
		result: [] as [(string | number)[], (string | number)[]][],
		openPanel: false,
	},
	mutations: {
		addCards(state, payload: Card) {
			if (state.cards.length >= 10) return;
			state.cards.push(payload);
		},
		backCards(state) {
			state.cards = state.cards.slice(0, -1);
			state.result = [];
			state.openPanel = false;
		},
		clearCards(state) {
			state.cards = [];
			state.result = [];
			state.openPanel = false;
		},
		runCards(state) {
			const cardValues = state.cards.map((v) => v.value);
			const result = zcp.getAllCorrectCards(cardValues);
			state.result = zcp.filter(zcp.sort(result));
			state.openPanel = true;
			console.log(zcp.sort(result));
		},
		setPanel(state) {
			state.openPanel = !state.openPanel;
		},
	},
});
