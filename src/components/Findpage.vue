<template>
    <div class="find-page">
        <!-- <swipe class="my-swipe">
            <swipe-item class="slide1"><img src="@/assets/img/f1.jpg" alt=""></swipe-item>
            <swipe-item class="slide2"><img src="@/assets/img/f2.jpg" alt=""></swipe-item>
            <swipe-item class="slide3"><img src="@/assets/img/f3.jpg" alt=""></swipe-item>
        </swipe> -->
        <Carousel autoplay v-model="value2" loop>
            <CarouselItem class="photo-box">
                <div class="demo-carousel">
                    <img src="@/assets/img/f1.jpg" alt="">
                </div>
            </CarouselItem >
            <CarouselItem class="photo-box">
                <div class="demo-carousel">
                    <img src="@/assets/img/f2.jpg" alt="">
                </div>
            </CarouselItem>
            
            <CarouselItem class="photo-box">
                <div class="demo-carousel">
                    <img src="@/assets/img/f3.jpg" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <Tabs value="name1" class="tabs">
        <TabPane label="精选" name="name1">
            <ul class="content">
                <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>
            </ul>
        </TabPane>




        <TabPane label="哈尔滨" name="name2">
            <ul class="content">
                <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>
            </ul>
        </TabPane>



        <TabPane label="泰国" name="name3">
            <ul class="content">
                <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>
            </ul>
        </TabPane>



        <TabPane label="日本" name="name4">
            <ul class="content">
                <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>
                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>
            </ul>
        </TabPane>



        <TabPane label="欧洲" name="name6">
            <ul class="content">
                <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>
                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>



                  <li class="tour-list">
                    <h2>悠然夏日去避暑，亲近山水在临安</h2>
                    <div class="tour-mid">
                        <img src="@/assets/img/2.jpg" alt="">
                        <p>和许多人一样。我们呆在自己的城市总会有厌倦的时候是哦就是大家啦啦啦你看世界发生短路电流的没打开哦哈啥的你的身份军事基地的焊接设备复合肥多少收到了开始就结束</p>
                    </div>
                    <div class="tour-foot">
                        <div class="tour-foot-left">
                            <img src="@/assets/img/3.jpg" alt="">
                            <span>mary</span>
                            <span>2018.01.12</span>
                        </div>
                        <div class="tour-foot-right">
                            <Icon type="eye"></Icon>
                            <span>18</span>
                            <Icon type="heart"></Icon>
                            <span>16</span>
                        </div> 
                    </div>
                </li>
            </ul>        
        </TabPane>
    </Tabs>
        <bottom></bottom>
    </div>
     
</template>

<script>
// import vueswipe from "vue-swipe/dist/vue-swipe.css";
// import { Swipe, SwipeItem } from "vue-swipe";
import bottom from '@/components/common/Bottom';
export default {
    data() {
        return {
            value2: 0,
        }
    },
  components: {
    // Swipe,
    // SwipeItem
    bottom
  }
};
</script>

<style>
ul{
    list-style-type: none;
}
.my-swipe {
  height: 4.15rem;
  margin-top: 1rem;
}
.my-swipe img{
    height:4.15rem;
}
.photo-box div{
    width: 413px;
    height: 200px;
}
.photo-box div img{
   /* background-size:cover; */
   width: 100%;

}
 .find-page .content{
    margin-bottom: 1rem;
}  
.tour-list{
    width: 95%;
    height:3.8rem;
    margin: 0 auto;
    border-bottom:0.02rem solid #ccc;
}
.tour-list h2{
    margin-top: 0.2rem; 
    font-size: 0.3rem;
    font-weight: 800;
}
.tour-mid{
    margin:0.2rem 0; 
    overflow: hidden;
}
.tour-mid img{
    width: 45%;
    height: 1.9rem;
    float: left;
    margin-right: 0.3rem;
}
.tour-mid p{
    width: 50%;
    float: right;
    font-size: 0.25rem;
    /*text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap; */
    display: -webkit-box;  
    -webkit-line-clamp: 5; 
    -webkit-box-orient: vertical;  
    overflow: hidden; 
}
.tour-foot{
    height: 0.9rem; 
}
.tour-foot-left{
    float: left;
}
.tour-foot-left img{
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 100%;
}
.tour-foot-left span, .tour-foot-right span{
    font-size: 0.25rem;
    line-height: 0.9rem;
    margin:  0 0.15rem;
}
.tour-foot-right{
    float: right;
}
 .tabs .ivu-icon{
    font-size: 0.25rem;
}
.tabs .ivu-tabs-bar{
    margin-bottom: 0;
}
 .tabs .ivu-tabs-nav .ivu-tabs-tab{
        margin-right: 21px;
        font-weight: 800;
}
.tabs.ivu-tabs-ink-bar{
    left: 5px;
}
.ivu-tabs-nav-container{
    font-size: 0.2rem;
}
/* .ivu-icon-chevron-right .ivu-icon-chevron-left{
    display: none;
} */
</style>