<template>
    <div>
            <div class="citybg">
            <router-link to="/search"><img  class="left" src="@/assets/img/left.svg" alt=""></router-link>
            <img  class="c-search" src="@/assets/img/sousuo.svg" alt="">
             <i-button type="primary">
                  哈尔滨
              <Icon type="arrow-down-b">
              </Icon>
             </i-button>
            </div>
            <div class="item">
                <ul class="item-one">
                    <li>
                        <img src="@/assets/img/chuang.svg" alt="" @click="hotelList"><br>
                        <span>酒店</span>
                     </li>                   
                    <li>                        
                       <img src="@/assets/img/canting.svg" alt="" @click="resList"><br>
                        <span>餐厅</span>                       
                    </li>
                   
                </ul>
                 <ul class="item-two">
                    <li>
                        <img src="@/assets/img/wanle.svg" alt=""><br>
                        <span>景点</span>
                     </li>
                    <li>
                        <img src="@/assets/img/youji.svg" alt=""><br>
                        <span>游记</span>
                    </li>
                </ul>
                
            </div>
    </div>
</template>

<script>
    export default {
            methods:{
                resList(){
                     this.$router.push('/restaurantlist');
                },
                hotelList(){
                    this.$router.push('/hotelList');
                }
            }
    }
</script>

<style scoped>
.citybg{
    width:100%;
    height: 4.3rem;
   background: url('../../assets/img/countries/13.jpg')  0 0  no-repeat ;
   background-size:contain;
}
.citybg .left{
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.5rem 0.5rem;
}
.citybg .c-search{
    width: 0.5rem;
    height: 0.5rem;
    float: right;  
    margin: 0.5rem 0.5rem;
}
.ivu-btn-primary{
    margin-left: 1rem;
    margin-top: 1rem;
}
ul{
    display: flex;
    height: 2rem;
    
}
ul li {
    float: left;
    flex-grow: 1;
    background: #ffffff;
    display:flex;
    justify-content:center;
    align-items:center;
    border-right:1px solid #cccccc;
    border-bottom: 1px solid #cccccc
}
ul li:last-child{
    border-right:none;
}
ul li img{
    width: 0.7rem;
    height: 0.7rem;  
}
ul li span {
        color: black;
        margin-top: 1rem;
        margin-left: -0.56rem;
} 
</style>