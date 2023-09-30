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
                  v-if="product"
                  class="white--text align-end"
                  width="500px"
                  height="500px"
                  style="
                    margin-left: 3%;
                    justify-content: center;
                    align-items: center;
                  "
                  :src="'data:image/jpeg;base64,' + product.pdImage"
                  alt="Product Image"
                />
              </v-col>

              <v-col cols="6">
                <v-card-title v-if="product">
                  {{ product.pdName }}
                </v-card-title>

                <v-card-text class="text--primary">
                  <div v-if="product">{{ product.pdDescription }}</div>

                  <div v-if="product">
                    วันที่ผลิด: {{ formatDate(product.pdMfg) }}
                  </div>

                  <div v-if="product">
                    วันที่หมดอายุ: {{ formatDate(product.pdExp) }}
                  </div>

                  <div v-if="product">
                    ผู้ผลิต: {{ product.pdManufacturer }}
                  </div>

                  <div v-if="product">ราคา: {{ product.pdPrice }}</div>
                </v-card-text>
              </v-col>
              <v-col cols="6"></v-col>
              <v-col cols="3">
                <Count
                  v-model="cartsQty"
                  :count="cartsQty"
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
import axios from 'axios'
import Count from '../components/Count.vue'

export default {
  components: {
    Count
  },

  props: ['id'],
  data() {
    return {
      product: null,
      cartsQty: 1
    }
  },
  created() {
    this.fetchProductDetails(this.id)
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-US', options)
    },
    fetchProductDetails(id) {
      axios
        .get(`http://localhost:9000/products/${id}`)
        .then((response) => {
          this.product = response.data
        })
        .catch((error) => {
          console.error('Error fetching product details:', error)
        })
    },
    onIncrement(newCount) {
      this.cartsQty = newCount
    },
    onDecrement(newCount) {
      this.cartsQty = newCount
    },

    async addToCart() {
      try {
        const response = await axios.post(
          `http://localhost:9000/add-to-cart/${this.product.id}?quantity=${this.cartsQty}`,
          {
            quantity: this.cartsQty
          }
        )
        if (response.data) {
          localStorage.setItem('cartProduct', JSON.stringify(response.data))

          console.log('Add to cart response:', response.data)
          console.log(
            'Added to cart:',
            this.product.id,
            'Quantity:',
            this.cartsQty
          )
          alert('Product added to cart successfully!')
        } else {
          console.log('Invalid response data')
        }
      } catch (error) {
        console.log('error', error)
      }
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
