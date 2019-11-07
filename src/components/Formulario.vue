<template>  
  <div>
    <titulo :texto="titulo"></titulo>
    <itensMenu> </itensMenu> <br />    
    
    <label>Nome: </label> <br /><br />
    <input type="text" name="nome" placeholder="Insira Seu Nome" v-model="nome" />
    <br /><br />

    <label>Em qual unidade você está alocado? </label> <br /><br />
    <select name="selectUnidade" id="selectUnidade" v-model="unidadeSelecionada">
      <option selected value="">Selecione Uma Opção</option>
      <option v-for="unidade in unidades" v-text="unidade.nome" :value="unidade.codigo" :key="unidade.codigo"></option>
    </select> 
    <br /><br />
        
    <label>Atividades na empresa: </label> <br /><br />
    <textarea style="width: 300px;height:100px;" placeholder="Descreva sua atividade na empresa"
              v-model="atividades"></textarea>
    <br /><br />              
    
    <input type="button" @click="salvar" value="Salvar" />


  </div>
</template>

<script>

export default {
  name: 'Formulário',

  data(){
    return{
      titulo: 'Formulário',
      nome: "",
      unidades: [],
      unidadeSelecionada: "",
      atividades: ""
    }
  },
  methods:{
    salvar(){
      if ((this.nome && this.unidadeSelecionada && this.atividades) !== '') {
        alert(this.nome + ' - ' + this.unidadeSelecionada + ' - ' +  this.atividades);      
        this.$router.push("/");
      } else {
        alert('Favor preencher todos os campos');      
      }
    },

    listarUnidades(){
      this.axios.get('http://10.0.2.15:3000/unidades').then((response) => {
        this.unidades = response.data;
      })
    }
  },

  mounted(){
    this.listarUnidades();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
