import  Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

//声明使用vuex
Vue.use(Vuex)

//创建store对象
export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
})