<template>
<div>
    <div class="shang">
        <img src="@/assets/img/h-1.jpg" alt="" class="picture">
        <i class="iconfont icon-xiangzuo" @click="goback"></i> 
        <i v-bind:class="iconStyle" @click="change()"></i>
    </div>
         <div class="hoteltail">
             <ul>
             <li @click="fn()">
             <div class="comment">
                 <h2>哈尔滨索菲特大酒店</h2>
                 <p>Sofitel Harbin</p><br>

                 <!-- <i class="iconfont icon-favoritesfilling"></i>
                <i class="iconfont icon-favoritesfilling"></i>
                <i class="iconfont icon-favoritesfilling"></i>
                <i class="iconfont icon-favoritesfilling"></i>
                <i class="iconfont  icon-pingxing2"></i> -->
                 <Rate :value.sync="value"></Rate>
                 <p>553条点评</p>
             </div>
        
             
             <li @click="fn()">
             <div class="message">
                 <h2>酒店信息</h2>
                 <p>哈尔滨索菲特大酒店位于哈尔滨商业中心，装修风格时尚豪华，把经典的法国设计与传统的中国文化合而为一。离太平机场很近，紧邻会展中心，交通方便快捷。酒店拥有321间环境优雅舒适的豪华客房和索菲特行政楼层俱乐部，三个风味餐厅，会议设施齐全，此外还有水疗馆、健身中心和室内加热游泳池，设施一应俱全。</p>
             </div>
             </li>
             <li @click="fn()">
             <div class="price">
                 <span class="jiage">最优价格</span>
                 <span class="jiaqian">¥689</span>

             </div>
             </li>
             <li @click="fn()">
             <div class="dinggou">
                 <p>立即购买</p>
             </div>
             </li>

          </ul>
         </div>
         

    </div>
</template>

<script>
    export default {
        data(){
            return{
                iconStyle:"iconfont icon-kongxin",
                value:4
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
.hoteltail li{
    display:flex;
    padding:0.2rem;
    border-bottom:0.01rem solid rgb(251, 251, 251);
}
.icon-xiangzuo{
        color: white;
        font-size: 0.43rem;
        font-weight: bold;
        position: absolute;
        left:0.25rem;
        top:0.2rem;
    }
.icon-kongxin{
        position: absolute;
        top:0.2rem;
        right:0.25rem;
        color:white;
        font-size:0.43rem;
        font-weight: bold;
    }
.icon-shixin{
        position: absolute;
        top:0.2rem;
        right:0.25rem;
        color:rgb(235, 72, 100);
        font-size:0.43rem;
        font-weight: bold;
    }
/* .icon-xin{
    position:absolute;
    top:0rem;
    font-weight:bold;
    font-size:0.5rem;
    color:white;
    right:0.25rem;
}
.icon-xin1{
    position:absolute;
    top:0rem;
    font-weight:bold;
    font-size:0.5rem;
    color:red;
    right:0.25rem;
 
} */
.picture{
    width: 100%;
    height:5rem;
    display:block;
}
.comment{
    padding-left: 0.25rem;
    overflow:hidden;

}
.comment h2{
    font-size: 0.45rem;
    font-weight: bold;
    margin-top:0.02rem;

}
.comment p{
    font-size:0.28rem;
    display:inline-block;
}
.shang picture{
    position:relative;

}
.message{
    padding-left:0.25rem;

}
.message h2{
    font-size: 0.38rem;
    font-weight: bold;
    margin-top:0.25rem;
    
}
.message p{
    font-size: 0.25rem;
    color:01a580;
    font-weight:bold;
    margin-top:0.2rem;
    display:inline-block;
}
.jiage{
    font-size:0.4rem;
    color:black;
    font-weight:bold;
   

}
.jiaqian{
    font-size:0.4rem;
    font-weight:bold;
    margin-left:3rem;
}
.dinggou{
    font-size:0.35rem;
    font-weight:bold;
    color:black;
    background:rgba(34, 180, 112, 0.63);
   text-align: center;
    width: 100%;
}







</style>