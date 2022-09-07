<template>
   
<Header></Header>
 <router-view></router-view>
 <Footer></Footer> 
</template>

<script>
 import Header from '../components/header.vue';

 import Footer from '../components/footer.vue';
export default {
 
  components:{Header,Footer},
  name: "Master-View",
};
</script>

<style lang="scss" scoped></style>
