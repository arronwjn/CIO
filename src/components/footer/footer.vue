<template>
    <div class="footer">
          <div>
              <router-link :to="{path:'/home',activeClass:'router-link-exact-active'}">首页</router-link>
          </div>
          <div>
              <router-link :to="{path:'/center',activeClass:'router-link-exact-active'}">个人中心</router-link>
          </div>
    </div>
</template>

<script>
    export default{
        name:'footer',
        data () {
            return{

            }
        },
        created () {

        }
    }
</script>

<style scoped>
    .footer{
        display:flex;
        justify-content: space-around;
        height:80px;
        line-height: 80px;
    }
    .footer .router-link-exact-active {
      color:rgb(240,20,20);
    }
</style>
