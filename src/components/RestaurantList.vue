<template>
    <div>
        <div id="top">
            <img  class="left" src="@/assets/img/left.svg" alt="" @click="goback">
            <button class="place" @click="find()">
            <p>哈尔滨市</p>
            <i class="iconfont icon-arrowdown"></i>
            </button>
        </div>
        <div id="content">
            <h2>餐厅</h2>
            <ul class="restaurantlist">
                <li @click="fn()">
                    <div class="img-box"><img src="@/assets/img/pic1.jpg" alt=""></div>
                    <div class="info-box">
                        <h3 class="list-title">哈尔滨东方饺子王</h3>
                        <!-- <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i> -->
                        
                        <Rate class="rate" :value.sync="value"></Rate>
                        <p>107条点评</p>
                        <p>哈尔滨市排名第1的餐厅(共685间)</p>
                        <span class="list-distance">7.1公里</span><span>距离目前位置</span>
                        <p>￥￥-￥￥￥,中餐,亚洲料理</p>
                    </div>
                </li>
                <li @click="fn()">
                    <div class="img-box"><img src="@/assets/img/pic2.jpg" alt=""></div>
                    <div class="info-box">
                        <h3 class="list-title">Peacock Restaurant</h3>
                          <!-- <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i> -->
                        <Rate :value.sync="value"></Rate>
                        <p>52条点评</p>
                        <p>哈尔滨市排名第2的餐厅(共685间)</p>
                        <span class="list-distance">6.8公里</span><span>距离目前位置</span>
                        <p>￥￥-￥￥￥,印度菜,亚洲料理</p>
                    </div>
                </li>
                <li @click="fn()">
                    <div class="img-box"><img src="@/assets/img/pic3.jpg" alt=""></div>
                    <div class="info-box">
                        <h3 class="list-title">43层自助餐厅</h3>
                          <!-- <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i> -->
                        <Rate :value.sync="value"></Rate>
                        <p>21条点评</p>
                        <p>哈尔滨市排名第3的餐厅(共685间)</p>
                        <span class="list-distance">7.1公里</span><span>距离目前位置</span>
                    </div>
                </li>
                <li @click="fn()">
                    <div class="img-box"><img src="@/assets/img/pic4.jpg" alt=""></div>
                    <div class="info-box">
                        <h3 class="list-title">老厨家(文政街店)</h3>
                          <!-- <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i> -->
                         <Rate :value.sync="value"></Rate>
                        <p>22条点评</p>
                        <p>哈尔滨市排名第4的餐厅(共685间)</p>
                        <span class="list-distance">3.3公里</span><span>距离目前位置</span>
                        <p>￥￥-￥￥￥,中餐</p>
                    </div>
                </li>
                <li class="lastlist"  @click="fn()">
                    <div class="img-box"><img src="@/assets/img/pic5.jpg" alt=""></div>
                    <div class="info-box">
                        <h3 class="list-title">东方饺子王(索菲亚店)</h3>
                          <!-- <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i>
                        <i class="iconfont icon-Artboardx"></i> -->
                        <Rate :value.sync="value"></Rate>
                        <p>40条点评</p>
                        <p>哈尔滨市排名第5的餐厅(共685间)</p>
                        <span class="list-distance">6.8公里</span><span>距离目前位置</span>
                        <p>￥￥-￥￥￥,中餐,亚洲料理</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                 value: 3
            }
        },
        methods:{
            fn(){
                this.$router.push('/RestaurantDetail');
            },
            find(){
                this.$router.push('/Location');
            },
            goback(){
                this.$router.go(-1);
            }
           
        }
    }
</script>

<style scoped>
    #top{
        background: #01a580;
        height: 1rem;
        position: fixed;
        width: 100%;
        top:0;
        z-index: 1;
    }
    #top p{
        display:inline-block;
    }
    #top .left{
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.3rem 0.2rem;
}
    #content{
        margin-top: 1rem;
    }
    .restaurantlist li{
        display: flex;
        padding: 0.2rem;
        border-bottom: 1px solid #ccc;
    }
    .restaurantlist p{
        display: inline-block;
    }
    .img-box{
        flex-grow: 1;
        width: 0;
    }
    .img-box img{
        width: 1.5rem;
        height: 1.5rem;
        margin-left:0.08rem;
    }
    .info-box{
        flex-grow:2.4;
        width: 0;
        
    }
    .list-title{
        font-size:0.32rem;
        font-weight: 600;
    }
    #content h2{
        margin-left: 0.28rem;
        border-bottom: 1px solid #eee;
        font-size:0.34rem;
        font-weight:bolder;
        padding-top:0.26rem;
        padding-bottom: 0.1rem;
    }
    .restaurantlist lastlist{
        border-bottom: none;
    }
    .info-box p,span{
        color: #959595;
        font-size:0.26rem;
    }
    .info-box .list-title{
        color: black;
    }
    .info-box .list-distance{
        font-size:0.28rem;
        color: #636363;
        background: #e5e5e5;
        margin-right: 0.15rem;
        border-radius: 0.2rem;
        font-weight: bold;
    }
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
    .icon-xiangzuo{
        color: white;
        font-size: 0.43rem;
        font-weight: bold;
        margin-left: 0.28rem;
        position: absolute;
        top:0.15rem;
    }
    .icon-arrowdown{
        color: white;
        font-size:0.28rem;
        font-weight: bolder;
        margin-left: 0.05rem;
    }
</style>