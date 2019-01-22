<template>
	<div id="detail">
		<div class="top">
			<img :src=" playVideo ? '/static/img/item/item8.jpg':dataList.cover"  class="img">
			<img :src="playVideo ? '/static/img/icon/stop.png' : '/static/img/icon/play.png'" class="play-stop" @tap="playToStop">
		</div>
		<div class="content">
			<p>{{dataList.desc}}</p>
			<div class="icon-img">
				<span  @tap="isAccept">
					<image :src="accept ? '/static/img/icon/recommend_on.png' : '/static/img/icon/recommend.png' "  ></image>	
				</span>
				<span>
					<image src="/static/img/icon/share.png" ></image>
				</span>
				<div class="line"></div>
			</div>
		</div>
		<button type="default" class="buttons" open-type="share">转发文章</button>
		<div class="artical">{{dataList.desc}}风刀霜剑爱疯了就爱上斗罗大陆辅导老师颠覆了第三季度司法局两地分居丁老师</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	// 获取是谁在播放状态
	import isPlayObject from '../../data/staticPlay.js'
	export default {
		data() {
			return {
				accept:false,
				dataList:{},
				playVideo:false
			};
		},
		beforeMount(){
			let index = this.$mp.query.index;
		    this.dataList = this.listTap[index];
			this.accept = this.dataList.checked;
			
			//监听背景音乐的播放和暂停
			wx.onBackgroundAudioPlay(()=>{
				this.playVideo = true;
				isPlayObject.playIndex = index;
				isPlayObject.isPlay = true;
			});
			wx.onBackgroundAudioPause(()=>{
				this.playVideo = false;
				isPlayObject.isPlay = false;
			});
			//监听退出后是否在播放中
			isPlayObject.playIndex == index && isPlayObject.isPlay ? this.playVideo = true : this.playVideo = false;
			
		},
		computed:{
			...mapState(['listTap'])
		},
		methods:{
			isAccept(){
				this.accept = !this.accept;
				this.$store.commit('changeList',{index:this.$mp.query.index,checked:this.accept});
				let title = this.accept ?  '已经收藏': '取消收藏';
				wx.showToast({
					title,
					icon:'success',	
				});
			},
			playToStop(){
				this.playVideo = !this.playVideo;
				if(this.playVideo){
					wx.playBackgroundAudio({
						dataUrl:'http://f2.htqyy.com/play7/541/mp3/1',
						title:'小燕子',
						
					})
				}else{
					wx.pauseBackgroundAudio()
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
.top{
	position: relative;
}
.top .img{
	width: 100%;
	height: 250px;
}
.play-stop {
	width: 48px;
	height: 48px;
	position: absolute;
	top:50%;
	left:50%;
	margin-left: -24px;
	margin-top: -24px;
}
.content p{
	font-size: 16px;
	color: #333;
	font-weight: 600;
	text-align: center;
	margin: 20rpx 0;
}
.icon-img {
	width: 90%;
	margin: 0 auto;
	text-align: right;
	position: relative;
}
.icon-img image{
	width: 25px;
	height: 26px;
}
.line{
	width: 100%;
	height: 1rpx;
	background: #eee;
	position: absolute;
	top:13px;
	left:0;
	z-index: -1;
}
.artical{
	font-size: 14px;
	line-height: 24px;
	color: #333;
	text-indent: 2em;
	margin-top: 20rpx;
}
.artical:first-letter{
	font-weight: 700;
	font-size: 16px;
}
.buttons{
	width: 150px;
	font-size: 15px;
	
}

</style>
