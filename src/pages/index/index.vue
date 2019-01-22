<template>
		<div class="first-index">
			<img :src="userInfo.img">
			<button open-type="getUserInfo" @getuserinfo="onGotUserInfo" class="get-user" v-if="loginStatus">用户授权</button>
			<p class="your-name">{{userInfo.name}}</p>
			<a  @tap="startTo">开启小程序之旅</a>
		</div>
	
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					img:'',
					name:''
				},
				loginStatus:true
			};
		},
		onLoad(){
			console.log("-----onLoad----");
		},
		created(){
			console.log("----created----")
		},
		beforeMount(){
			console.log("------beforMount------")
			this.handleGetUserInfo();
			
		},
		methods:{
			onGotUserInfo(e){
				//获取用户信息 判断用户点击的是允许还是拒绝
				let rawdata = e.mp.detail; 
				if("rawData" in rawdata){
					this.handleGetUserInfo()	
				}	
				
			},
			handleGetUserInfo(){
				wx.getUserInfo({
					success:(data)=>{
						this.userInfo = {
							img: data.userInfo.avatarUrl,
							name:data.userInfo.nickName,	
						} 
						this.loginStatus = false;
					},
					fail:(err)=>{
						this.loginStatus = true;
					}
				})
			},
			startTo(){
				wx.switchTab({
					url:"/pages/list/main"
					})
			}
		}
		
	}
</script>

<style >
	page{
		background: #01bcd4;
		box-sizing: border-box;
		
	}
	.first-index{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 80rpx 0;
		box-sizing: border-box;
	}
	.first-index img{
		width:200rpx;
		height: 200rpx;
		border-radius: 50%;
	}
	.your-name{
		font-size:36rpx;
		color: #333;
		font-family: "microsoft yahei";
		margin: 30rpx 0;
		box-sizing: border-box;
		
	}
	.first-index a{
	 display: block;
	 padding: 20rpx;
	 font-size: 24rpx;
	 border:1rpx solid #ccc;
	 border-radius: 10rpx;
	 background: #0074D9;
	 color: #fff;
	 margin: 100rpx 0;
	 box-sizing: border-box;
	}
	.get-user{	
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		font-size: 28rpx;
		color: #333333;
		text-align: center;
		line-height: 200rpx;
		box-sizing: border-box;
	}

</style>
