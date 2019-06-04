<template>
  <div id="app">
    <div id="board">
      <div
        :key="index"
        class="square"
        :class="'square__' + index"
        v-for="(square, index) in squares"
      >
        <button
          class="btn"
          @click="square.mark = 'X'"
        >
          {{ square.mark }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      squares: [
        { mark: null },
        { mark: null },
        { mark: null },
        { mark: null },
        { mark: null },
        { mark: null },
        { mark: null },
        { mark: null },
        { mark: null }
      ]
    }
  }
})
</script>

<style lang="scss">
  #board {
    max-width: 400px;
    display: grid;
    grid-template-columns: repeat(3, 0fr)
  }

  .square {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: white;
    border-color: black;
    border-style: solid;
    border-width: 1px;

    .btn {
      height: 100%;
      font-size: 60px;
      margin: 0px;
      width: 100%;
      text-align: center;
    }
  }
</style>
