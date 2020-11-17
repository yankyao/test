<template>
  <div class="history-container">
    <div class="history-item_block" v-for="item in historyList" :key="item.position">
      position: {{item.position}},
      status: {{item.status}},
      duration: {{item.duration}}
      data: {{item.data}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    historyList() {
      const { history } = this.$store.state;
      if (history && history.length) {
        return ([...history]).reverse();
      }
      return [];
    },
  },
};
</script>

<style lang="less">
.history-container {
  padding: 36px;
  .history-item_block {
    padding: 12px;
    border-bottom: 1px solid #cccccc;
  }
}

</style>
