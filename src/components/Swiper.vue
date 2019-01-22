<template>
	<!-- 轮播图 -->
	<swiper :indicator-dots="configSwiper.indicatorDots" :autoplay="configSwiper.autoplay" :indicator-color="configSwiper.indicatorColor" :indicator-active-color="configSwiper.indicatorActiveColor" :duration="configSwiper.duration" :vertical="configSwiper.vertical" :interval="configSwiper.interval" :circular="configSwiper.circular">
		<span v-for=" (item,index) in imgUrls" :key="index">
			<swiper-item>
				<img :src="item" class="slide-image" :style="{width:Width,height:Height}"/>
			</swiper-item>
		</span>
	</swiper>
</template>

<script>
	export default {
		props:{
			imgUrls:{
				type:Array,
				default:function (){
					return []
				}
			},
			configSwiper:{
				type:Object,
				default:function (){
					return {
						indicatorDots:false,
						autoplay:false,
						indicatorColor:"rgba(0,0,0,.3)",
						indicatorActiveColor:"#000000",
						duration:500,
						circular:true,
						interval:5000,
						vertical:false,
						width:'100%',
						height:150
					}		
				}
			}
		},
		computed:{
			Width(){
				if(this.configSwiper.width == '100%'){
					return this.configSwiper.width
				};
				let type = typeof this.configSwiper.width;
				if(type == 'number'){
					return this.configSwiper.width +'px'
				};	
					
			 },
			 Height(){
			 	let type = typeof this.configSwiper.height;
			 	if(type == 'number'){
			 		return this.configSwiper.height +'px'
			 	} ;	
			 		
			  }
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.slide-image{
		width: 100%;
		height: 150px;
		
	}
</style>
