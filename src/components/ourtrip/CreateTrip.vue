<template>
    <div>
        <top></top>
        <div class="create">
            <h2>行程名称</h2>
            
            <Input class="inp" v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
            <h2>旅行日期</h2>
            <DatePicker class="date" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
             <Button class="btn" type="success" long>完成</Button>
        </div>
    </div>
</template>

<script>
import top from '@/components/common/Top';
    export default {
        data() {
            return {
                  value: ''
            }
        },
        components:{
            top
        },
        mounted:function(){
            //改变footer top 颜色 标题
            this.$store.commit('changeTitle','创建行程');
          }
    }
</script>

<style scoped>
.create{
    margin-top: 1rem;
    overflow: hidden;
}
.create h2{
    margin: 0.3rem 0.2rem;
}
.create .inp{
    margin-left: 0.2rem;
}
.create .date{
   margin-left: 0.2rem;
}
.create .btn{
   margin-top: 6.5rem
}
.ivu-btn-success{
    background: #00CED1;
    height: 0.85rem;
}
</style>