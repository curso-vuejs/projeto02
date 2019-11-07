<template>  
  <div>
    <titulo :texto="titulo1"></titulo>
    <itensMenu> </itensMenu>    
    <titulo :texto="titulo2"></titulo>

    <table>
      <tr>
        <th v-for="texto in cabecalho" :key="texto" v-text="texto"></th>      
      </tr>
      <tr v-for="item in items" :key="item.valor">
        <td v-for="valor in item" :key="valor" v-text="valor"></td>      
      </tr>
    </table>  
    <br/>
    <strong>Total de salários: </strong> {{totalSalarios}}
  </div>
</template>

<script>
export default {
  name: 'Tabela',

  computed:{
    totalSalarios(){          
      var total = 0;
      for(var item of this.items){
        total += item.salario;
      }
      return total;
    }
  },

  data(){
    return{
      titulo1: 'Tabela',
      titulo2: 'Lista de Funcionários',
      cabecalho: ['Id','Nome', 'Cargo', 'Unidade', 'Salário'],
      items: [
       
      ], 
    }
  },
  methods:{
    listarFuncionarios(){
      this.axios.get('http://10.0.2.15:3000/registros').then((response) => {
        this.items = response.data;
      })
    }
  },

  mounted(){
    this.listarFuncionarios();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  width:100%;
}
table, th, td {  
  border: 1px solid black;
}
</style>
