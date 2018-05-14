<template>
    <div>
        <div class="tou">
            <img  class="left" src="@/assets/img/left.svg" alt="" @click="goback">
            <button class="place" @click="find()">
                <p>哈尔滨市</p>
                <i class="iconfont icon-arrowdown"></i>             
            </button>
    </div>
     <div id="h-content">     
        <ul class="hotelList">
            <li @click="fn()">
            <div class="img-box">
                <img src="@/assets/img/h-1.jpg" alt="">
            </div>
            <div class="info-box">
                <h2 class="title">哈尔滨索菲特大酒店</h2>
                <Rate :value.sync="value"></Rate>
                <p>553条点评</p>
                <span class="list-distance">6.6公里</span><span>距离目前位置</span>
                <p>¥684起</p>
            </div>
            </li>
            <li @click="fn()">
                <div class="img-box">
                     <img src="@/assets/img/h-2.jpg" alt="">
                </div>
                <div class="info-box">
                    <h2 class="title">7天哈尔滨中央大街店</h2>                
                    <Rate :value.sync="value"></Rate>
                    <p>338条点评</p>
                    <span class="list-distance">6.9公里</span><span>距离目前位置</span>
                    <p>¥82起</p>
                </div>
            </li>
              <li @click="fn()">
                <div class="img-box">
                    <img src="@/assets/img/h-3.jpg" alt="">
                </div>
                <div class="info-box">
                    <h2 class="title">万达假日酒店</h2>              
                    <Rate :value.sync="value"></Rate>
                    <p>417条点评</p>
                    <span class="list-distance">6.5公里</span><span>距离目前位置</span>
                    <p>¥330起</p>
                </div>      
            </li>
            <li @click="fn()">
                <div class="img-box">
                    <img src="@/assets/img/h-4.jpg" alt="">
                </div>
                <div class="info-box">
                    <h2 class="title">哈尔滨如家中央大街店</h2>               
                    <Rate :value.sync="value"></Rate>
                    <p>951条点评</p>
                    <span class="list-distance">7.3公里</span><span>距离目前位置</span>
                    <p>¥82起</p>
                </div>
             </li>
            <li @click="fn()">
                <div class="img-box">
                    <img src="@/assets/img/h-5.jpg" alt="">
                </div>
                <div class="info-box">
                    <h2 class="title">哈尔滨香格里拉大酒店</h2>              
                    <Rate :value.sync="value"></Rate>
                    <p>951条点评</p>
                    <span class="list-distance">6.2公里</span><span>距离目前位置</span>
                    <p>¥768起</p>
                </div>
            </li>
        </ul>
    </div>
        </div>

    </template>

<script>



export default{
    data() {
        return {
            value:4
        }
    },
    methods:{
        fn(){
            this.$router.push('/HotelTail');
        },
        find(){
            this.$router.push('/Location')

        },
         goback(){
                this.$router.go(-1);
            }

    }
    


}


</script>


<style scoped>
.tou{
    background: #01a580;
    height:1rem;
    position: fixed;
    width: 100%;
    top:0;
        z-index: 1;
}
.tou p{
    display:inline-block;
}
#h-content{
    margin-top: 1rem;
}
.tou .left{
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.3rem 0.2rem;
}

.title{
    font-size: 0.34rem;
}
.hotelList li{
    display:flex;
    padding:0.2rem;
    border-bottom:0.02rem solid #ccc;
}
.img-box{
    flex-grow:1;
    width:0;
   

}
.img-box img{
    width: 1.5rem;
        height: 1.5rem;
       margin-left:0.08rem;
}

.info-box{
    flex-grow:2;
    width: 0;
    font-size:0.25rem;
}

/* .com-top-btn{
    color:white;
    position:absolute;
    left:0.2rem;
    top:50%;
    transform:translateY(-50%);

}
.com-top h2{
    
    
    color:black;

} */
.place{
        font-size:0.34rem;
        border-radius: 0.3rem;
        height: 0.75rem;
        width: 2.4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top:-0.37rem;
        margin-left: -1.2rem;
        background: #088170;
        border: none;
    }
    .place p{
        color: white;
        font-weight: bold;
        font-size:0.35rem;
    }
.icon-xaingxia{
   position:absolute;
   font-size:0.4rem;
   margin-top:-0.4rem;
   margin-left:0.75rem;
}
.icon-arrowdown{
        color: white;
        font-size:0.28rem;
        font-weight: bolder;
        margin-left: 0.05rem;
    }
.list-distance{
    background:rgb(194, 193, 193);
}
</style>