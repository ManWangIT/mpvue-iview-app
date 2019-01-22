<template>
	<div id="list">
		<Swiper :imgUrls="imgUrls" :configSwiper="configSwiper" id="swiper"></Swiper>
		<evaluateList v-for=" (item,index) in listTap" :key="index" :dataItem="item" :id="index"></evaluateList>
	</div>
</template>

<script>
	import Swiper from "@/components/Swiper";
	import evaluateList from "@/components/evaluate";
	import { mapState,mapGetters} from 'vuex'
	export default {
		components:{Swiper,evaluateList},
		data() {
			return {
				imgUrls:['/static/img/slider/bg.jpg','/static/img/slider/bg2.jpg','/static/img/slider/bg4.jpg','/static/img/slider/bg5.jpg'],
				configSwiper:{
					indicatorDots:true,
					autoplay:true,
					indicatorActiveColor:"#01bcd4",
					duration:500,
					interval:5000,
					width:'100%',
					height:150,
					circular:true
				},
				page:1,
			};
		},
		beforeMount(){
			// 获取数据 每次触底刷新 获得10条、
			this.$store.dispatch("getList",this.page);
		},
		computed:{
			// ...mapGetters(['getPageListData']),
// 			...mapState({
// 				listTap:state =>{
// 					return state.listTap
// 				}
// 			})
     ...mapState(['listTap'])
		},
		methods:{
			
		},
		//上拉加载
		onReachBottom:function(){
			//加载下一两条数据
			let promise = new Promise (function (resolve,reject){
				//做一些异步操作
					wx.showLoading({
						title:'加载中'
					});
					resolve()
			});
			promise.then(()=>{
				setTimeout(()=>{
					wx.hideLoading();
					this.$store.dispatch('getList',++this.page);
				},2000)
				
			})
			
			
		},
		//停止下拉刷新
		async onPullDownRefresh(e){
			// 停止下拉刷新
			wx.stopPullDownRefresh();
		}
		
		
	}
</script>

<style>
	

	

</style>
