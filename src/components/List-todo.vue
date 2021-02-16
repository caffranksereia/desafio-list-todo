<template>
    <div class="list-todo">
        <b-table striped hover :items="items" :fields="fields" v-for="items in Tarefa" :key="items.tarefas">
            <template v-slot:cell(actions)="data">
                <b-button size="sm" @click="confirmEdit(data.id)">Editar
                    <editar></editar>
                </b-button>
                <b-button size="sm"  @click="confirmDel(data.id)">Excluir
                    <excluir></excluir>
                </b-button>

            </template>
        </b-table>
        <div>
            <div>
                <button>Editar</button>
                <editar></editar>
            </div>
            <div>
                <button>Excluir</button>
                <excluir></excluir>
            </div>
        </div>
    </div>
</template>
<script>
import Editar from './Editar.vue';
import Excluir from './Excluir.vue';
import { getAll as getTodo} from './service/Todo';
import set from 'vue';

export default {
  components: { Editar, Excluir },
    data(){
        return{
            fields:['Tarefa','Ações'],
            items: [
                {Tarefa:'Ir ao banco'},
                {Tarefa:'Ir ao banheiro'},
                {Tarefa:'Ir ao tomar agua'}
            ]
        }
    },
    methods:{
      confirmDel(){
        this.$refs.modal.show();
       },
       confirmEdit(){
           this.$refs.modal.show();
       }
       
    }
}
</script>
<style scoped>

</style>