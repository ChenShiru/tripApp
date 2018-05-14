<template>
    <ul class="bottom">
        <li><router-link to="/index"><img src="@/assets/img/home.svg"  alt=""></router-link></li>
        <li><router-link to="/find"><img src="@/assets/img/find.svg" alt=""></router-link></li>
        <li><router-link to="/mytrip"><img src="@/assets/img/wode.svg"  alt=""></router-link></li>
        <li><img src="@/assets/img/chuangjian.svg"  alt=""></li>
        <li><img src="@/assets/img/geren.svg"  alt=""></li>
    </ul>
</template>
<script>
    export default {
        methods:{        
        }
    }
</script>
<style scoped>
    .bottom{
        height: 1rem;
        background: #ffffff;
        position: fixed;
        bottom:0;
        left: 0;
        width: 100%;
        display: flex;
    }
    .bottom li{
        flex-grow:1;
        margin-right:0.8rem; 
        line-height: 1rem;
        text-align: center;
    }
    .bottom li:last-child{
        margin-right:0; 
    } 
    .bottom li img{
     height: 100%;
     width: 100%;
    }
      .bottom li a{
        color: #4ca58f;
        outline: none;
    } 
    .bottom li a.router-link-exact-active{
      border-style: dashed;

    }

    
</style>