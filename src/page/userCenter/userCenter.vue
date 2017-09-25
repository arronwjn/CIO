<template>
  <div class="center">
      userCenter
      <div class="back" @click="back()">返回</div>
  </div>
</template>

<script>
  export default{
    name:'userCenter',
    data(){
      return{

      }
    },
    created(){

    },
    methods:{
      back(){
        this.$router.go(-1);
//          history.back()
      }
    }
  }
</script>

<style scoped></style>
