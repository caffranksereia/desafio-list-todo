<template>
  <div>
    <div class="mt-3">
      Submitted TODO:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li >{{ TODO }}</li>
      </ul>
    </div>
    <b-modal id="modal-prevent-closing"
    ref="modal"
    >

    </b-modal>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your TODO"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="TODO"
          label-for="name-input"
          invalid-feedback="TODO is required"
          :state="todoState"
        >
          <b-form-input
            id="TODO-input"
            v-model="TODO"
            :state="todoState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<script>
export default {
    name:'Editar',
    props: {
        name:String,
        message: String,
        id: Number,
        list: String
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