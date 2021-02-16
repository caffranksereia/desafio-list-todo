<template>
  <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
    <!-- App title section -->
    <div class="row m-1 p-4">
        <div class="col">
            <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                <h1 class="title">Minhas tarefas</h1>
            </div>
        </div>
    </div>
    <!-- Create todo section -->
    <div class="row m-1 p-3">
        <div class="col col-11 mx-auto">
            <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div class="col">
                    <input class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new ..">
                </div>
                <div class="col-auto px-0 mx-0 mr-2">
                    <button @click="Adicionar">Adicionar</button>
                </div>
            </div>
        </div>
    </div>
    <div>
      <form>
        <list-todo>
          <div>
            <div class="col-auto px-0 mx-0 mr-2">
              <editar ></editar>
              <button >Editar</button>
              
            </div>
            <div class="col-auto px-0 mx-0 mr-2">
              <excluir v-if="show" :message="delMsg"></excluir>
             <button @click="confirmDel">Excluir</button>
             
            </div>
          </div>
        </list-todo>
      </form>
    </div>
   
  </div>
</template>
<script>

import ListTodo from './List-todo';
import Editar from './Editar.vue';
import Excluir from './Excluir.vue';

export default {
  components:{
    ListTodo,
    Editar,
    Excluir
  },
  data() {
    return{
      items:[
          {Tarefa:'Ir ao banco'},  
        ]
    }
     
  },
  methods:{
    adicionar(){

       
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    font-family: "Open Sans", sans-serif;
    line-height: 1.6;
}

.add-todo-input,
.edit-todo-input {
    outline: none;
}

.add-todo-input:focus,
.edit-todo-input:focus {
    border: none !important;
    box-shadow: none !important;
}

.view-opt-label,
.date-label {
    font-size: 0.8rem;
}

.edit-todo-input {
    font-size: 1.7rem !important;
}

.todo-actions {
    visibility: hidden !important;
}

.todo-item:hover .todo-actions {
    visibility: visible !important;
}

.todo-item.editing .todo-actions .edit-icon {
    display: none !important;
}

</style>