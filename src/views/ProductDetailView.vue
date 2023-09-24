<template>
  <div class="background">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            max-width="100%"
            style="border-radius: 15px; background-color: #ace5f8"
          >
            <v-row justify="space-between">
              <v-col cols="6">
                <v-img
                  class="white--text align-end"
                  width="500px"
                  height="350px"
                  style="
                    margin-left: 3%;
                    justify-content: center;
                    align-items: center;
                  "
                  :src="product.imageUrl"
                  alt="Product Image"
                />
              </v-col>

              <v-col cols="6">
                <v-card-title>
                  {{ product.name }}
                </v-card-title>

                <v-card-text class="text--primary">
                  <div>{{ product.description }}</div>
                  <div>วันที่ผลิด: {{ product.manufactureDate }}</div>
                  <div>วันที่หมดอายุ: {{ product.expiryDate }}</div>
                  <div>ผู้ผลิต: {{ product.manufacturer }}</div>
                  <div>ราคา:{{ product.price }}</div>
                </v-card-text>
              </v-col>
              <v-col cols="6"></v-col>
              <v-col cols="3">
                <Count
                  :count="count"
                  @increment="onIncrement"
                  @decrement="onDecrement"
                />
              </v-col>
              <v-col cols="3">
                <v-card-actions>
                  <v-btn outlined text @click="addToCart"
                    >เพิ่มใส่ตระกร้า
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productData } from '@/store/productData'
import Count from '../components/Count.vue'

export default {
  components: {
    Count
  },

  props: ['id'], // This prop is automatically passed by Vue Router
  data() {
    return {
      product: null,
      count: 1
    }
  },
  created() {
    // Fetch product details based on the 'id' route parameter
    this.fetchProductDetails(this.id)
  },
  methods: {
    fetchProductDetails(id) {
      // Simulate fetching data based on 'id'
      // Replace this with actual API calls in a real application
      const selectedProduct = productData.find(
        (product) => product.id === parseInt(id)
      )
      if (selectedProduct) {
        this.product = selectedProduct
      }
    },
    onIncrement(newCount) {
      this.count = newCount
    },
    onDecrement(newCount) {
      this.count = newCount
    },
    addToCart() {
      // Implement your logic to add the product to the cart here
      // Youcan use this.product and this.count to determine what to add to the cart
      console.log('Added to cart:', this.product.name, 'Quantity:', this.count)
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #f0f0f0; /* Add your desired background color */
  padding: 20px;
}
</style>
