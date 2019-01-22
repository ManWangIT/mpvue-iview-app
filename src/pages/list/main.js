 import Vue from "vue"
 import List from "./list.vue"
 
const app = new Vue(List)
app.$mount();

export default {
	config:{
		"enablePullDownRefresh":true,
		"navigationBarTitleText":"列表也"
	}
}

