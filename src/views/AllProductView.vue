<template>
  <div class="background-all">
    <v-container>
      <v-row>
        <v-col cols="12">
          <AllProduct :products="products" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AllProduct from '@/components/AllProduct.vue'

export default {
  components: {
    AllProduct
  },
  data() {
    return {
      products: [
        // Your product data here
      ]
    }
  }
}
</script>

<style scoped>
.background-all {
  background-image: url('~@/assets/bg.jpg');
  /* margin-top: 5%; */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
