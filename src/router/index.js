import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/Register'
import index from '@/components/Index'
import search from '@/components/dest/Search'
import distination from '@/components/dest/Distination'
import restaurantlist from '@/components/RestaurantList'
import restaurantdetail from '@/components/RestaurantDetail'
import hotelList from '@/components/hotel/HotelList'
import hotelTail from '@/components/hotel/HotelTail'
import mytrip from '@/components/ourtrip/Mytrip'
import find from '@/components/Findpage'
import createTrip from '@/components/ourtrip/CreateTrip'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: register
    },
    {
      path: '/index',
      component: index
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/distination',
      component:distination
    },
    {
      path:'/restaurantlist',
      component:restaurantlist
    },
    {
      path:'/restaurantdetail',
      component:restaurantdetail
    },
    {
      path:'/hotelList',
      component:hotelList
    },
    {
      path:'/hotelTail',
      component:hotelTail
    },
    {
      path:'/mytrip',
      component:mytrip
    },
    {
      path:'/find',
      component:find
    },
    {
      path:'/createTrip',
      component:createTrip
    }
    

  ]
})
