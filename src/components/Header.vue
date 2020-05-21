<template>
  <header class="header">
    <h1>TodoList</h1>
  </header>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/theme.scss';
  .header{
    text-align: center;
    h1{
      margin: 20px;
      font-size: 100px;
      font-weight: 100;
      color: $lightred;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1)
    }
  }
</style>