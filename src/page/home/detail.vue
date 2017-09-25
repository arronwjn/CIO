<template>
    <div class="detail">
          <div @click="back()">返回</div>
          <div>{{$route.params.goodId}}</div>
    </div>
</template>

<script>
    export default{
        name:'detail',
        data () {
            return{

            }
        },
        created () {
//            console.log()
        },
        methods:{
          back(){
              this.$router.go(-1);
          }
        }
    }
</script>

<style scoped></style>
