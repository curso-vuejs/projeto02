<template>  
  <div>
    <titulo :texto="titulo"></titulo>
    <itensMenu> </itensMenu> <br />    
    
    <label>Nome: </label> <br /><br />
    <input type="text" name="nome" placeholder="Insira Seu Nome" v-model="nome" />
    <br /><br />

    <label>Cargo: </label> <br /><br />
    <input type="text" name="nome" placeholder="Insira Seu Cargo" v-model="cargo" />
    <br /><br />

    <label>Em qual unidade você está alocado? </label> <br /><br />
    <select name="selectUnidade" id="selectUnidade" v-model="unidadeSelecionada">
      <option selected value="">Selecione Uma Opção</option>
      <option v-for="unidade in unidades" v-text="unidade.nome" :value="unidade.codigo" :key="unidade.codigo"></option>
    </select> 
    <br /><br />

    <label>Salário: </label> <br /><br />
    <input type="text" name="nome" placeholder="Insira Seu Salário" v-model="salario" />
    <br /><br />   
              
    <input type="button" @click="salvar" value="Salvar" />


  </div>
</template>

<script>

export default {
  name: 'Formulário',

  computed:{
    id(){

    }
  },

  data(){
    return{
      titulo: 'Formulário',
      maxId: 0,
      nome: "",
      cargo: "",
      unidades: [],
      unidadeSelecionada: "",      
      salario:""
    }
  },
  methods:{
    salvar(){
      let t = this;
      if ((this.nome && this.cargo && this.unidadeSelecionada && this.salario) !== '') {
        alert(this.nome + ' - ' + this.cargo + ' - ' + this.unidadeSelecionada + ' - ' +  this.salario);      
      
        this.axios.post('http://10.0.2.15:3000/registros', {                  
          "nome": this.nome,
          "cargo": this.cargo,
          "unidade": this.unidadeSelecionada,
          "salario": this.salario
        })        
      .then(function (response) {
          t.$router.push("/tabela");
      })
      .catch(function (error) {
        console.log(error);
      });

      } else {
        alert('Favor preencher todos os campos');      
      }
    },

    irParaTabela(){
      
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
