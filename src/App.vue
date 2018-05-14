<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from '@/assets/js/rem';
import top from '@/components/common/Top';
import store from '@/vuex/store';
import iconfont from '@/assets/css/iconfont.css';
import bottom from '@/components/common/Bottom' ;
export default {
  name: 'App',
  components:{
    top,
    bottom
  },
  store
}
</script>

<style>

</style>
