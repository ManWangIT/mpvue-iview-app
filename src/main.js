import Vue from 'vue'
import App from './app'
import Fly from 'flyio/dist/npm/wx'
import store from './store/store' //引入vuex 的包

//设置vue的提示功能  关闭false
Vue.config.productionTip = false;

// 放到vue的原型上
Vue.prototype.$store = store;

//请求的插件 类似于axios
let Flyio = new Fly();
Vue.prototype.$Fly = Flyio;

//声明当前组件的类型
App.mpType = 'app'; //应用级的 

//生成应用的实例
const app = new Vue(App);

//挂载整个应用
app.$mount();