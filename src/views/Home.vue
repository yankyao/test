<template>
  <div class="home-container">
    <button @click="handleStart">Start</button>
    <button @click="handleStop">Stop</button>
    <p>current: {{githubData.position}}</p>
    <p>status: {{githubData.status}}</p>
    <p>duration: {{githubData.duration}}</p>
    <p v-if="githubData.data">data: <code>{{githubData.data}}</code></p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    githubData() {
      return this.$store.getters.currentItem || {};
    },
  },
  methods: {
    handleStart() {
      this.$store.dispatch('startTimeout');
    },
    handleStop() {
      this.$store.dispatch('stopTimeout');
    },
  },
};
</script>

<style lang="less">
  .home-container {
    padding: 48px;
  }
</style>
