<template>
	<div id="video">
		<ul>
			<li v-for="(item,index) in subjectData" :key="index" @click="tovideoDetail($event,index)"><img :src="item.images.large"><div class="middle"><h5>{{item.title}}</h5><p>年份：{{item.year}}</p><p>导演：{{item.directors[0].name}}</p></div><div class="story">剧情:{{item.genres}}</div><span class="score">{{item.rating.average}}</span></li>
		</ul>
		<i-toast id="toast" />
	</div>
</template>
<script>
	let  url = "http://t.yushu.im/v2/movie/top250"
	import {$Toast} from '../../../static/iview/base/index'
	export default {
		data(){
			return{
				subjects:[],
				count:50,
				total:0,
				
			}
		},
		beforeMount(){
			this.getVideo()
		},
		computed:{
			subjectData(){
				let data = this.subjects.map(item =>{
					item.title = item.title.split(' ')[0];
					item.genres = item.genres.slice(1).join(' ');
					return item
				});
				this.$store.commit('videoToDetail',data);
				return data
			}
		},
		methods:{
			getVideo(count=20,start=0){
				this.$Fly.get(url,{count,start}).then((res)=>{
					let subjects = res.data.subjects;
					if(subjects){
						this.subjects = subjects;
						this.count = res.data.count;
						this.total = res.data.total;
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			tovideoDetail(e,index){
				wx.navigateTo({
					url: '/pages/videoDetail/main?index=' + index,
				});
			}
		},
		onReachBottom(){
			//上拉加载
			let count;
			if(this.total == this.subjects.length){
				$Toast({
				 content: '暂无其他数据',
				 duration:1
				});
				return false
			};
			count = this.count + 50;
			let promise = new Promise((resolve,reject)=>{
				$Toast({
				 content: '加载中',
				 type: 'loading',
				 duration:1
				 
				});
				setTimeout(()=>{
					resolve();
				},1000)
				
			});
			promise.then(()=>{
				this.getVideo(count);
			})
			
		}
	}
	
</script>

<style scoped="scoped">
	#video{
		padding: 20px;
		box-sizing: border-box;
	}
	ul li{
		display: flex;
		position: relative;
		padding: 8px 0;
		border-bottom: 1px solid #ccc;
	}
	 li img{
		 width: 60px;
		 height: 60px;
	 }
	.middle {
		height: 60px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 10px;
		font-size: 10px;
		color: #aaa;
	}
	.middle h5{
		font-weight: bold;
		color: #333333;
	}
	.middle p:last-child{
		color: #666;
	}
	.score{
		text-align: right;
		color: red;
		position: absolute;
		right: 10px;
		top:0;
	}
	.story{
		font-size: 10px;

	}
</style>