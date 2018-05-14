import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    bgColor:'DarkTurquoise',
    title:'默认值',
    value:'',
    flag:0

}
const mutations = {
    change(state,bgcolor){  //只能传一个 参数
        state.bgcolor = bgcolor;
    },
    changeTitle(state,title){
        state.title = title;
    },
    changeTo(state,flag){
        state.flag = flag;
    }
}
export default new Vuex.Store({
    state,
    mutations
})
