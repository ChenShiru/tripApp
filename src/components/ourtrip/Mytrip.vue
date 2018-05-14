<template>
    <div class="trip">
        <top></top>
        <div class="mytrip">
            <h2>哈尔滨之旅</h2>
            <div class="tripList">
                <Card class="card">
                    <div class="cardContent">
                        <div class="img-box">
                            <img src="@/assets/img/countries/13.jpg" alt="">
                        </div>
                        <div class="info-box">
                            <h3 class="list-title">太阳岛</h3>
                            <Rate :value.sync="value"></Rate>
                            <p>52条点评</p>    
                            <p>哈尔滨市, 黑龙江省</p>
                        </div>
                    </div>
                </Card>
                <Card class="card">
                    <div class="cardContent">
                        <div class="img-box">
                            <img src="@/assets/img/countries/14.jpg" alt="">
                        </div>
                        <div class="info-box">
                            <h3 class="list-title">帽儿山</h3>
                            <Rate :value.sync="value"></Rate>
                            <p>52条点评</p>    
                            <p>哈尔滨市, 黑龙江省</p>
                        </div>
                    </div>
                </Card>
                <Card class="card">
                    <div class="cardContent">
                        <div class="img-box">
                            <img src="@/assets/img/countries/15.jpg" alt="">
                        </div>
                        <div class="info-box">
                            <h3 class="list-title">中央大街</h3>
                            <Rate :value.sync="value"></Rate>
                            <p>52条点评</p>    
                            <p>哈尔滨市, 黑龙江省</p>
                        </div>
                    </div>
                </Card>
                <div class="add">
                    <router-link to="/createTrip"><img src="@/assets/img/add.svg" alt=""></router-link>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
 
import bottom from '@/components/common/Bottom';
import top from '@/components/common/Top';
    export default {
        data() {
            return {
                value: 3
            }
        },
        components:{
            bottom,
            top
        },
          mounted:function(){
            //改变footer top 颜色 标题
            this.$store.commit('changeTitle','我的旅行');
          }
    }
</script>

<style scoped>
ul{
    list-style-type: none;
}


.mytrip{
    margin-top: 1rem;
    overflow: hidden;
    
}
.mytrip h2{
    margin-top: 0.5rem;
    margin-left: 0.2rem;
}
.tripList .add img{
    margin: 0.5rem 2.7rem;
    height: 0.8rem;
   

}
.ivu-card{
    width: 6rem;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    background: #f0ececd2 
}
.cardContent{
    display: flex;
}
 
.img-box{
        flex-grow: 1;
        
    }
.img-box img{
        height: 1.5rem;
        width: 2.5rem;
      
    }
.info-box{
        flex-grow:2.4;
    }
.list-title{
        font-size:0.32rem;
        font-weight: 600;
    }

</style>