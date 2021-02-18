<template>
  <div class= "excluir">
    <div>
      <h1> {{ name }}</h1>
    </div>
    <b-form-group>
      <b-list-group>
        <b-list-group-item v-for="todo in todoDel" :key="todoDel.id" class="todo-item">
          {{todoDel.tarefaDel}}
        </b-list-group-item>
      </b-list-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'del',
  data(){
    return{
      newTodo:String,
      id:Number,
      todoDel:
      [
        {
          'id':1,
          'tarefaDel':'Comer abobora'
        },
        {
          'id':2,
          'tarefaDel':'Lavar Banheiro'
        }
        
      ]
    }
  }
    methods:{
      
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>