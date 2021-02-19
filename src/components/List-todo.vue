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
    <div class="list-todo">
        <b-form-group>
            <b-list-group>
                <b-list-group-item v-for="todo in todo" :key="todo.id" class="todo-item">
                    {{ todo.Tarefa }}
                </b-list-group-item>
            </b-list-group>
        </b-form-group>
    </div>
</div>
<div class="butOpt">
   <b-button @click="confirmEdit">Editar</b-button>
</div>
<div class="butOpt">
    <b-button @click="confirmDel">Excluir</b-button>
</div>
<excluir></excluir>
<editar></editar>
</template>
<script>
import Editar from './Editar.vue';
import Excluir from './Excluir.vue';


export default {
    name: 'list-todo',
  components: { Editar, Excluir },
    data(){
        return{
            newTodo:String,
            id:Number,
           todo:[
          {
           'id': 1,
           'Tarefa':''
            },  
        ]
        }
    },
    methods:{
        Adicionar(){
            if(this.newTodo.trim().length == 0){
                return alert('form nulo')
            }
            this.todo.push({
                id:this.todo.id,
                Tarefa:this.todo.newTodo
            })
            this.newTodo=''
            this.idForTodo++
        },
      confirmDel(){
          this.todo.splice({
              id:this.todo.id,
              Tarefa:this.todo.newTodo
          })
       },
       confirmEdit(){
           this.$refs.modal.show();
       }
       
    }
}
</script>
<style scoped>
.butOpt{
    display: flex;
}
</style>