import Vue from "vue";

/* v-no-drag */
Vue.directive("no-drag", {
	bind(el) {
		el.ondragstart = () => false;
	}
});
