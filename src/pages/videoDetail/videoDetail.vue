<template>
	<div id="video_detail">
		<img :src="detailVideo[index].images.large">
			<p class="title">{{detailVideo[index].title}}</p>
			<div class="middle">
				<p>剧情简介:</p>
				<p>{{detailVideo[index].original_title}}</p>
			</div>
		 <i-button @click="handleClick" type="error" i-class="button">开始抢座</i-button>		
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		data(){
			return {
				index:null,
			}
		},
		beforeMount(){
			this.index = this.$mp.query.index;
		},
		computed:{
			...mapState(['detailVideo'])
		},
		methods:{
			handleClick(e){
				console.log(e)
			}
		},
		
	}
	
</script>
<style scoped="scoped">
#video_detail{
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 14px;
	
}
#video_detail img{
	width: 80%;
	height: 250px;
	box-shadow: 5px 5px 3px rgba(0,0,0,0.75),-5px -5px 3px rgba(0,0,0,0.75);
}
p:first-child,.title{
	text-align: left;
	margin: 10px 0;
	font-weight: bold;	
}
p:last-child{
	text-indent: 2em;
	line-height: 24px;
	letter-spacing: 3px;
	color: #333;

}
.button{
	margin-top:25px;
}

</style>