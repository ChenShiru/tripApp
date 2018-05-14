<template>
    <div>
        <div class="content-pic">
            <img src="@/assets/img/pic1.jpg" alt="" class="picture">   
           <i class="iconfont icon-xiangzuo" @click="goback"></i> 
            <i v-bind:class="iconStyle" @click="change()"></i>
             
        </div>
        <div class="others">
             <div class="comment">
                <h2>哈尔滨东方饺子王</h2>
                <p>Harbin DongFang JiaoZi Wang (ZhongYang Main Street)</p>
                <i class="iconfont icon-Artboardx"></i>
                <i class="iconfont icon-Artboardx"></i>
                <i class="iconfont icon-Artboardx"></i>
                <i class="iconfont icon-Artboardx"></i>
                <i class="iconfont icon-Artboardx"></i>
                <p>107条点评</p>
            </div>
             <div class="message">
                <h2>餐厅信息</h2>
                <i class="iconfont icon-dianhua"></i><p>+8645184855111</p><br>
                <i class="iconfont icon-weizhi"></i><p>黑龙江省 哈尔滨市 道里区中央大街37号</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
        return{
           iconStyle:"iconfont icon-kongxin"
            }
        },
        methods:{
            change(){
                if(this.iconStyle == "iconfont icon-kongxin"){
                    this.iconStyle = "iconfont icon-shixin"                    
                }else{
                    this.iconStyle = "iconfont icon-kongxin"
                }
            },
            goback(){
              this.$router.go(-1);
            }
           
           
        }
    }
</script>

<style scoped>
    .picture{
        width: 100%;
        height: 5rem;
        display: block;
    }
    .comment{
        background: #fafafa;
        padding-left: 0.25rem;
        overflow: hidden;
    }
    .comment h2{
        font-size:0.45rem;
        font-weight: bold;
        margin-top: 0.1rem;
    }
    .comment p{
        font-size:0.28rem;
        display: inline-block;
    }
    .message{
        padding-left: 0.25rem;
    }
    .message h2{
        font-size:0.38rem;
        font-weight: bold;
        margin-top: 0.25rem;
    }
    .message p{
        font-size:0.25rem;
        color:#01a580;
        font-weight: bold;
        margin-top: 0.2rem;
        display: inline-block;
       
    }
    .icon-xiangzuo{
        color: white;
        font-size: 0.43rem;
        font-weight: bold;
        position: absolute;
        left:0.25rem;
        top:0.2rem;
    }
    .icon-Artboardx{
        color:#088170;
        float: left;
    }
    .content-pic{
        position: relative;
    }
    .icon-kongxin{
        position: absolute;
        top:0.2rem;
        right:0.25rem;
        color:white;
        font-size:0.43rem;
        font-weight: bold;
    }
    .icon-dianhua,.icon-weizhi{
        color:#088170;
        font-size:0.25rem;
        margin-right: 0.2rem;
    }
    .icon-shixin{
        position: absolute;
        top:0.2rem;
        right:0.25rem;
        color:rgb(235, 72, 100);
        font-size:0.43rem;
        font-weight: bold;
    }
</style>