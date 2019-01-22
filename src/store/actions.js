import { GETLIST,FINISHED } from './mutations-type.js'

import listData from '@/data/goodList.js'
var num = 0;
const actions = {
	getList({commit},valuePage){
		// 触发对应的mutations
		let goodList = listData.goodList;
		// 判断分页
		let totalPage = Math.ceil(goodList.length / 2);
		let arrData = [];
		let total = 2 * valuePage;
		if(total == 1){
			arrData.push(goodList[0]);
		}else if(valuePage > totalPage && num == 0) {
				//已经没数据
			// commit(FINISHED,0);
			wx.showToast({
			  title: '暂没有多余数据',
			  duration: 1000
			});
			num++;
			return false;
		}else{
			for(let i=0; i < total;i++){
				if (goodList[i]){
					arrData.push(goodList[i]);
				}
				
			};
		}
			commit(GETLIST,arrData);
		
	}
}
export default actions