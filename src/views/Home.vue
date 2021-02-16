<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <Adicionar/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Adicionar from '../components/Adicionar.vue';



export default {
  name: 'Home',
  components: {
    HelloWorld,
    Adicionar,
   
  }
}
</script>
