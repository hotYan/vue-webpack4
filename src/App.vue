<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/Header.vue'
import MainTodo from './components/Todo/Todo.vue'
import MainFooter from './components/Footer.vue'
  export default {
    name: 'App',
    components:{
      MainHeader: MainHeader,
      MainTodo,
      MainFooter
    }
  }
</script>

<style lang="scss" scoped>

</style>