<template>
  <div class="todo-info">
    <span class="total">{{total}} item left</span>
    <div class="tabs">
      <a
        :class="['btn', 'primary', 'border', state == item ? 'actived' : '']"
        @click="toggleState(item)"
        v-for="(item, index) in states"
        :key="index"
      >{{item}}</a>
    </div>
    <button class="btn info" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInfo',
  props:{
    total:Number
  },
  data() {
    return {
      states: ['all', 'active', 'completed'],
      state: 'all'
    }
  },
  methods:{
    toggleState(state) {
      this.state = state
      this.$emit('toggleState', state)
    },
    clearCompleted() {
      this.$emit('clearCompleted')
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-info{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  font-weight: 400;
  line-height: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  .total{
    color: rgb(254, 67, 101);
  }
  .tabs{
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
  .btn.primary.border{
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    appearance: none;
    outline: none;
    border: 1px solid rgb(252, 157, 154);
    
    &.actived{
      border: none;
      background-color: rgb(252, 157, 154);
      color: #fff;
     
    }
  }
  .btn.info{
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background-color: rgb(131, 175, 155);
    color: #fff;
  }
}
</style>