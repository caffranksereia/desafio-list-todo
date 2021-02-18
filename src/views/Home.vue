<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <ListTodo/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ListTodo from '../components/List-todo.vue';



export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListTodo
   
  }
}
</script>
