<template>
  <div class="background-card">
    <v-container>
      <v-row>
        <v-col cols="12"> <Cart /> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
export default {
  components: {
    Cart
  },
  data() {},
  created() {},
  methods: {}
}
</script>

<style scoped>
.background-card {
  background-color: #fff; /* Add your desired background color */
  padding: 20px;
}
</style>
