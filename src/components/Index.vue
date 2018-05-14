<template>
    <div>
        <div class="icon">
            <img src="@/assets/img/TA_logo_primary.svg" alt="">
        </div>
        <Carousel autoplay v-model="value2" loop>
            <CarouselItem class="photo-box">
                <div class="demo-carousel">
                    <img src="@/assets/img/1.jpg" alt="">
                </div>
            </CarouselItem >
            <CarouselItem class="photo-box">
                <div class="demo-carousel">
                    <img src="@/assets/img/2.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem class="photo-box">
                <div class="demo-carousel">
                <img src="@/assets/img/4.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem class="photo-box">
                <div class="demo-carousel">
                    <img src="@/assets/img/5.jpg" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <ul class="select">
           
            <li>
                 
                <img src="@/assets/img/store/li02.png" alt="" @click="changeFlage">
                <span>目的地</span>
                 
            </li>
          
            <li>
                <img src="@/assets/img/jiudian.svg" alt="">
                <span>酒店</span>
            </li>
            <li>
                <img src="@/assets/img/meishi.svg" alt="">
                <span>美食</span>
            </li>
            <li>
                <img src="@/assets/img/jingdian.svg" alt="">
                <span>景点</span>
            </li>
        </ul>
        <div class="hotel">
                <h2>酒店预订</h2><br>
                
                <i-input class="pos" :value.sync="value" placeholder="请输入..." icon="ios-location" style="width: 5rem" @on-focus="changeFlage1" >  
                </i-input>
               
            <row>
                <i-col class="time" span="12">
                <Date-picker type="daterange"  placement="bottom-end" placeholder="选择日期" style="width: 3rem"></Date-picker>
                </i-col>
            </row>
            <Cascader class="p-sum"  :data="data" :value.sync="value1"></Cascader>
            <i-button class="btn" type="info" @click="hotel">查看价格</i-button>
        </div>
        <div class="t-hot" >
            <h2>热门目的地</h2>
                <ul class="hot-one">
                    <li>
                        <img src="@/assets/img/dongjing.jpg" alt=""><br>
                        <span>东京</span>
                    </li>
                    <li>
                        <img src="@/assets/img/h3.jpeg" alt=""><br>
                        <span>北京</span>
                    </li>
                    <li>
                        <img src="@/assets/img/h4.jpeg" alt=""><br>
                        <span>江苏</span>
                    </li>
                </ul>
                <ul class="hot-two">
                    <li>
                        <img src="@/assets/img/wanning.jpg" alt=""><br>
                        <span>万宁</span>
                    </li>
                    <li>
                        <img src="@/assets/img/sanya.jpg" alt=""><br>
                        <span>三亚</span>
                    </li>
                    <li>
                        <img src="@/assets/img/balidao.jpg" alt=""><br>
                        <span>巴厘岛</span>
                    </li>
                </ul>

        </div>

        <bottom></bottom>
    </div>
    
</template>

<script>
import bottom from '@/components/common/Bottom';
    export default {
        data() {
            return {
               value2: 0,
                value:'',
               value1: [],
                data: [{
                    value: 'yifan',
                    label: '1房',
                    children: [
                        {
                            value: 'yiren',
                            label: '1人'
                        },
                        {
                            value: 'liangren',
                            label: '2人'
                        },
                    ]
                }, {
                    value: 'liangfan',
                    label: '2房',
                    children: [
                        {
                            value: 'yiren',
                            label: '1人',
                        },
                        {
                            value: 'liangren',
                            label: '2人',
                        },
                        {
                            value: 'sanren',
                            label: '3人',
                        },
                        {
                            value: 'siren',
                            label: '4人',
                        }
                    ],
                }]
            }
        },
        methods:{
           changeFlage(){
            this.$store.commit('changeTo',0)
            this.$router.push('/search');
           },
           changeFlage1(){
               console.log('zzzz');
             this.$store.commit('changeTo',1)
            this.$router.push('/search');
            },
           hotel(){
               this.$router.push('/hotelList')
           }
           
        },
        components:{
            bottom
        },
        mounted(){
            var str = '';
            var arr =[] ;
            str = localStorage.getItem('obj');
            arr = JSON.parse(str);
            this.value = arr[arr.length-1].name;
        }
    }
</script>

<style scoped>
ul{
    list-style-type: none;
}
.icon img {
    width: 5rem;
    height: 1rem;
    margin-left: 0.8rem;
}
.photo-box div{
    width: 410px;
    height: 200px;
}
.photo-box div img{
   /* background-size:cover; */
   width: 100%;

}
.select{
        
        background:#ffffff; 
        width: 100%;
        display: flex;
    }
    .select li{
        flex-grow:1;
        text-align: center;
        position: relative;
        margin-top: 0.3rem;
    }
    .select li img{
        width: 1rem;
        margin-bottom: 0.3rem;
    }
    .select li span{
        position: absolute;
        left: 0.53rem;
        bottom: 0rem;
        color: black;   
    } 
    .ivu-date-picker .ivu-select-dropdown {
    width: 100%;
    }  
    .hotel{
        margin-top: 0.3rem;
        background: #eeeeee;
        height: 3rem;
    }
    .hotel h2{
        padding-top: 0.2rem;
        margin-left: 0.2rem;
    }
    .hotel .pos{
        margin-top: -0.1rem;
        margin-left: 0.2rem;
        margin-bottom: 0.1rem;
    }
    .hotel .time{
        margin-left: 0.2rem;
        /* position: relative; */
        
    }
    .hotel .p-sum{
        width:3rem;
        float: right;
        margin-top: -0.5rem;
    }
    .hotel .btn{
        width: 6rem;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
    }
    .t-hot{
        height: 5.5rem;
    }
    .t-hot ul{
         display: flex;
         height: 1.5rem;
         width: 100%;
    }
    .t-hot ul li{
        flex-grow: 1;
        float: left;
        height: 1.5rem;
    }
    .t-hot ul li img{
       width: 2rem;
       height: 100%
    }
    .t-hot ul li span{
      font-weight: 800;
      
    }
    .hot-two{
        margin-top: 0.5rem;
    }
    .t-hot h2{
        margin:0.2rem 0.2rem;
    }
</style>


