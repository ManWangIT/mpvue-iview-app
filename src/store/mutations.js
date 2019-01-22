import { GETLIST } from './mutations-type'

const mutations = {
	[GETLIST](state,listData){
		state.listTap = listData;
	},
	'changeList'(state,parmas){
		state.listTap[parmas.index].checked = parmas.checked;
	},
	'videoToDetail'(state,parmas){
		state.detailVideo = parmas;
	}
}
export default mutations