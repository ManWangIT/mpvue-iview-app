<template>
	<div id='evaluate'>
		<div class="evaluate-top">
			<img src="/static/img/singleimg/single1.jpg" class="evaluate-img">
			<span class="evaluate-time">2018</span>
			<span class="evaluate-name">桑硅谷</span>
		</div>
		<div class="evaluate-middle" @click="toDetail">
			<img :src="dataItem.cover" >
			<p>{{dataItem.desc}}</p>
		</div>
		<div class="evaluate-bottom">
			<p><span @click="ChangeUp"><i-icon type="collection" size="24" color="#80848f" v-if="toAdd"/><i-icon type="collection_fill" size="24" color="#e96900" v-else /></span><span class="text-num">{{numStar}}</span><h2 :class="['add-one',{active:isActive,addoneColor:toAdd== true}]">❤<span>{{number}}</span></h2></p>
			<p class="p2"><i-icon type="browse" size="24" color="#80848f" /><span>{{dataItem.price}}</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			dataItem:{
				type:Object,
				default:function (){
					return {}
				}
			},
			id:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				numStar:0,
				toAdd:true,
				isActive:false,
				number:'+1'
			}
		},
		beforeMount(){
			this.numStar = this.dataItem.count;
		},
		methods:{
			ChangeUp(e){
				setTimeout(()=>{
					this.isActive = true;
					if(this.toAdd){
						this.numStar++;
						this.number = '+1';	
					}else{
						this.numStar--;
						this.number = '-1';
					}
					this.toAdd = !this.toAdd;
				},0)
				this.isActive = false;
			},
			toDetail(){
				wx.navigateTo({
					url:`/pages/detail/main?index=${this.id}`
				})
			}
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	#evaluate{
		margin: 10px 0;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.evaluate-top{
		display: flex;
	}
	.evaluate-img{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		vertical-align: bottom;
	}
	.evaluate-time{
		font-size: 12px;
		color: #333;
		display: inline-block;
		margin: 0 10px;
		line-height: 1.5;
	}
	.evaluate-name{
		font-size: 14px;
		font-weight: 700;
		display: inline-block;
	}
	.evaluate-middle{
		margin: 10px 0;
	}
	.evaluate-middle img{
		width: 100%;
		height: 250px;
	}
	.evaluate-middle p{
		font-size: 14px;
		color: #333;
		line-height: 24px;
		text-indent: 2em;
		letter-spacing: 1.5px;	
	}
	.evaluate-bottom {
		position: relative;
		display: flex;
	}
	.text-num{
		font-size: 14px;
		color: #555;
	}
	.add-one{
		font-size: 14px;
		color: orangered;
		position: absolute;
		top:-8px;
		left:2px;
		opacity: 0;
	},
	.add-one span{
		margin-left: 4px;
	}
	.addoneColor{
		color: #ccc;
	}
	.active {
		animation: flutter 1.2s ease-in-out;
		-webkit-animation:flutter 1.2s ease-in-out;
	}
	@keyframes flutter{
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
			top:-15px;
			
		}
	}
	.p2{
		line-height:30px;
		font-size: 14px;
		color:#555;
	}
</style>
