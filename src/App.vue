<template>
  <h1 class="text-3xl font-semibold -mt-10 pb-1 pt-4 font-mono bg-white dark:bg-gray-700 text-black dark:text-gray-300">Benedict's Big SearchBox</h1>
  <div class="bg-white dark:bg-gray-900" >
    <Feed/>
  </div>
</template>

<script>
import Feed from './components/Feed.vue'

export default {
  name: 'App',
  components: {
    Feed
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
