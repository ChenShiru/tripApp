<template>
    <div>
            <top></top>
            <div class="search">
                <i-input v-model.lazy="value"  placeholder="输入城市名或拼音查询" style="width: 300px"></i-input>
                <i-button type="primary"  shape="circle" icon="ios-search" @click="fn()">搜索</i-button>
            </div>
            <div class="search-con">
                <h2>
                    历史访问过的目的地
                </h2>
                <!-- <router-link to="/distination"><Tag closable color="blue" ></Tag></router-link> -->
                <!-- <Tag closable color="green" >巴厘岛</Tag> -->
                <Tag v-for="(obj,index) in arr" :key="index" closable color="blue" v-if="obj.show"  @on-close="handleClose(obj)">{{obj.name}}</Tag>
            </div>
            <div class="hot">
                <h2>
                   当季热门目的地
                </h2>
                 <Tag>东京</Tag>
                 <Tag>威尼斯</Tag>
                 <Tag>迪拜</Tag>
                 <Tag>大阪市</Tag>
                 <Tag>都柏林</Tag>
                 <Tag>华盛顿特区</Tag>
                 <Tag>京都市</Tag>
                 <Tag>墨尔本</Tag>
                 <Tag>科伦坡</Tag>
                 <Tag>巴黎</Tag>
                 <Tag>海南</Tag>
                 <Tag>万宁</Tag>
            </div>

    </div>
</template>

<script>
import top from '@/components/common/TOP';
    export default {
        data () {
            return {
                value:'',
                arr:[]
            }
        },
        methods: {
            handleClose (obj) {
                obj.show = false;
                var str ='';
                str = JSON.stringify(this.arr);
                localStorage.setItem('obj',str);
            },
            fn(){  
                var flag = false;
                for(var i=0;i<this.arr.length;i++){
                    if(this.value == this.arr[i].name && this.arr[i].show==true){
                            flag = true;
                            break;
                    }
                       // console.log(this.arr[i].name);
                }
                if(this.value == '' || flag== true ){
                            
                }else{
                    var str ='';
                    var obj ={
                      name:this.value,
                      show:true
                }  
                    this.arr.push(obj);
                    this.value="";
                    str = JSON.stringify(this.arr);
                    localStorage.setItem('obj',str);
                }  
                if(this.$store.state.flag == 0){ 
                      
                    this.$router.push('/distination');  
                }else{
                     
                    this.$router.push('/index');
                }                 
            }
        },
            components:{
                top
            },
             mounted:function(){
            //改变footer top 颜色 标题
            this.$store.commit('changeTitle','目的地');
            this.arr = JSON.parse(localStorage.getItem('obj'));
    }
    }
</script>
<style scoped>
.search{
   margin-top: 1.2rem;
    margin-left: 0.2rem;
}
.search-con{
    margin-top: 0.5rem;
}
.hot{
     margin-top: 0.5rem;
}
.search-con h2{
    margin-bottom: 0.3rem;
}
.ivu-tag{
    height: 1rem;
     line-height: 1rem;
     width: 2rem;
     text-align: center;
     font-weight: 800;
}

</style>