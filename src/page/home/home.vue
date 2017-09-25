<template>
  <div class="homes">
      <div v-if="!$route.meta.requiresAuth" class="home">
        <myheader></myheader>
        <div class="main">
          home
          <div @click="godetail(1)">列表1</div>
          <div @click="godetail(2)">列表2</div>
          <div @click="godetail(3)">列表3</div>
          <div @click="godetail(4)">列表4</div>
        </div>
        <myfooter></myfooter>
      </div>
      <div v-if="$route.meta.requiresAuth">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  import FetchDataModule from '../../config/fetch';
  import myheader from '../../components/header/header';
  import myfooter from '../../components/footer/footer';

  export default {
      name: 'home',
      data () {
          return {}
      },
      created () {
        FetchDataModule.fetch('GETFACADELIST')
          .then(e => {
              console.log(e, 'sfwefwefewfewfwe');
           })
      },
      methods:{
        godetail (id) {
            this.$router.push({
                name:'detail',
                params:{goodId:id}
            });
        }
      },
      components:{
          myheader,
          myfooter
      }
  }
</script>

<style scoped>
    .homes{
        width: 100%;
        height: 100%;
    }
    .home{
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    .main{
        flex:1;
    }
</style>
