<template>
  <div id="app">
    <titulo :texto="titulo"></titulo>
    <itensMenu> </itensMenu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      titulo: 'Exercício 3 - Thiago',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
