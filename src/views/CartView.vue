<template>
  <div class="background-card">
    <v-container>
      <v-row>
        <v-col cols="12"> <Cart :product="productData" /> </v-col>
        <!-- <v-col cols="12" style="align-self: flex-end; margin-top: 10%">

          <CartTotal />
        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productData } from '@/store/productData'
import Cart from '@/components/Cart.vue' // Import the Cart component
//import CartTotal from '@/components/CartTotal.vue'
export default {
  components: {
    Cart
    // CartTotal
  },
  data() {
    return {
      productData: null
    }
  },
  created() {
    // Fetch product details based on the 'id' route parameter
    this.fetchProductDetails(1) // Example: You can replace 1 with the desired product ID
  },
  methods: {
    fetchProductDetails(id) {
      // Simulate fetching data based on 'id'
      // Replace this with actual API calls in a real application
      const selectedProduct = productData.find(
        (product) => product.id === parseInt(id)
      )
      if (selectedProduct) {
        this.productData = selectedProduct
      }
    }
  }
}
</script>

<style scoped>
.background-card {
  background-color: #fff; /* Add your desired background color */
  padding: 20px;
}
</style>
