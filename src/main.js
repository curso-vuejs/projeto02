import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Titulo from './components/Titulo.vue'
import Menu from './components/Menu.vue'
import Tabela from './components/Tabela'
import Formulario from './components/Formulario'

Vue.config.productionTip = false

Vue.component('titulo', Titulo);
Vue.component('itensMenu', Menu);


Vue.use(VueAxios,Axios);
Vue.use(VueRouter);


const routes = [
  {path: '/', component: App },  
  {path: '/tabela', component: Tabela },  
  {path: '/formulario', component: Formulario },  
]

const router = new VueRouter({
  mode: 'history',
  routes
})
  

new Vue({
  router,
}).$mount('#app')
