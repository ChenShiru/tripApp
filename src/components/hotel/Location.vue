<template>
    <div class="location">
        <input type="text" placeholder="搜索目的地">
        <router-link to="/"><i class="iconfont icon-cha"></i></router-link>


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
input{
    border:1px solid white;
    height:0.76rem;
    outline:none;
    margin-top:0.9rem;
    color:#ccc;
    font-size:0.5rem;
    padding-left:0.2rem;
    width:5.6rem;
    caret-color:blue;

}
.location{
    position:relative;
}
.icon-cha{
    color:#01a580;
    font-size:0.43rem;
    font-weight:bolid;
    top:0.2rem;
    right:0.25rem;
    position:absolute;


}
</style>