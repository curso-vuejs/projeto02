<template>  
  <div>
    <router-link v-for="(item, index) in menu" :key="item.nome" :to="item.link" > 
      {{item.nome}} 
      <span v-if="index != (menu.length-1)">|</span> 
    </router-link> 
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data(){
    return{
      menu: [ 
        {nome:"Home", link:"/" },         
        {nome:"Tabela", link:"/tabela" },    
        {nome:"Formulário", link:"/formulario" },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
