<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_adam_1.svg" class="logo">
    <HelloWorld msg="ADAM KIDRON"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style type="css">
.logo{
  height:300px;

}
</style>
