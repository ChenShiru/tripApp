<template>
    <div class="top" :style="{background:$store.state.bgColor}">
        <router-link to="/index" ><span class="com-top-btn">首页</span></router-link>
        <h2>
            {{$store.state.title}}
        </h2>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .top{
        height: 1rem;
        background:#00CED1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .top h2{
        line-height: 1rem;
        text-align: center;
        color: #fff;
    }
    .com-top-btn{
        color: #fff;
        position: absolute;
        left:0.2rem;
        top:50%;
        transform: translateY(-50%);
    }
    
</style>