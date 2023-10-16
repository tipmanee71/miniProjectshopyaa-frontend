<template>
  <div class="count-container">
    <v-card style="background-color: #00239f; border-radius: 15px">
      <button @click="decrementCount" class="count-button">-</button>
      <span class="count-value">{{ count }}</span>
      <button @click="incrementCount" class="count-button">+</button>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      count: this.initialValue
    }
  },
  methods: {
    incrementCount() {
      this.count++
      this.$emit('increment', this.count)
    },
    decrementCount() {
      if (this.count > 0) {
        this.count--
        this.$emit('decrement', this.count)
      }
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}

.count-container {
  display: flex;
  align-items: center;
}

.count-button {
  cursor: pointer;
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
}

.count-value {
  margin: 0 10px;
  font-size: 20px;
  color: #fff;
}
</style>
