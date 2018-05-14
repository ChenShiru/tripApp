<template>
     <Layout>
        <Header class='header'>
        <div class>
         <router-link to="/index">
            <span class="com-top-btn">首页</span>
        </router-link>
        <span>注册</span>
        </div>
        
        </Header>
        <Content class='content'>
                <div class="tel"> 
                    <Input v-model="tel" placeholder="输入手机号" style="width: 300px">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </div>
                <div class="uname">
                    <Input v-model="tel" placeholder="请输入你的昵称" style="width: 300px">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                     </Input>
                </div>
                <div class="pass">
                    <Input type="password" v-model="password" placeholder="输入密码" style="width: 300px">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </div>
        <div class="btn">
        <Button type="primary" @click="check">注册</Button>
        </div>
        
        </Content>
    </Layout>
    
</template>

<script>
import Axios from "axios";
     export default {
      data:function(){
          return {
              tel:"",
              password:"",
              
          }
      },
      methods:{
          check:function(){
                var tel=this.tel;
                var password=this.password;
                console.log(tel);
                console.log(password);
                var params = new URLSearchParams();
                params.append('tel', tel);
                params.append('password', password);
                //axios.post('/foo', params);

                Axios.post('http://127.0.0.1/triphou/user/index',params).then(function(res){
            console.log(res);
          })
        },
          }
      }
            
     
</script>

<style scoped>
.header{
    background: green;
    text-align: center;
    color:#fff;
    font-size: 0.3rem;
    position: relative;
}
.com-top-btn{
        color: #fff;
        position: absolute;
        left:0.2rem;
        top:50%;
        transform: translateY(-50%);
    }

.tel{
   margin-top: 2rem;
   margin-left: 1rem;
}
.pass{
    margin-left: 1rem;
}
.uname{
    margin-left: 1rem;
}
.btn{
    text-align: center;
}

</style>