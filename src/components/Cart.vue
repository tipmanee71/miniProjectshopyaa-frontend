<template>
  <v-row>
    <v-col cols="12" class="all">
      <v-card-actions>
        <v-checkbox
          v-model="selectAll"
          color="indigo"
          label="เลือกทั้งหมด"
          value="indigo"
        ></v-checkbox>
      </v-card-actions>
    </v-col>

    <v-col cols="12">
      <v-card
        max-width="100%"
        style="border-radius: 15px; background-color: #ace5f8"
      >
        <v-row justify="center" align="center">
          <!-- Center both horizontally and vertically -->
          <v-col cols="2">
            <v-img
              class="white--text align-end"
              width="200px"
              height="200px"
              style="margin-left: 3%"
              :src="product.imageUrl"
              alt="Product Image"
            />
          </v-col>

          <v-col cols="4">
            <v-card-title>
              {{ product.name }}
            </v-card-title>
          </v-col>

          <v-col cols="2">
            {{ product.price }}
          </v-col>

          <v-col cols="2">
            <Count
              :count="count"
              @increment="onIncrement"
              @decrement="onDecrement"
            />
          </v-col>

          <v-card-actions>
            <v-checkbox v-model="selectAll" color="indigo" value="indigo">
            </v-checkbox>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="12">
      <div style="flex-grow: 1; justify-content: end; margin-top: 20px">
        <v-card
          max-width="100%"
          style="border-radius: 15px; background-color: #bfcbf9"
          :elevation="8"
        >
          <v-row justify="space-between">
            <v-col cols="2" class="d-flex justify-start" style="margin-left: 2%"
              >รวม
            </v-col>
            <v-col cols="4">iราคา</v-col>
            <v-col cols="4" class="d-flex justify-end" style="">
              <v-btn
                @click="orderProduct"
                color="#7D91DC"
                style="margin-right: auto; margin-left: 50%"
              >
                สั่งซื้อ
              </v-btn>
            </v-col>
            <v-dialog v-model="showSuccess" max-width="500px">
              <div class="text-center">
                <v-card>
                  <v-card-text>
                    <h1 class="success-message">Success!</h1>
                  </v-card-text>
                </v-card>
              </div>
            </v-dialog>
          </v-row>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import Count from './Count.vue' // Import the Count component

export default {
  components: {
    Count
  },
  props: {
    product: Object // Prop to pass the product data to the card
  },
  data() {
    return {
      count: 1,
      selectAll: false, // Initialize selectAll to false
      showSuccess: false
    }
  },
  methods: {
    onIncrement(newCount) {
      this.count = newCount
    },
    onDecrement(newCount) {
      this.count = newCount
    },
    addToCart() {
      // Implement your logic to add the product to the cart here
      // You can use this.product and this.count to determine what to add to the cart
      console.log('Added to cart:', this.product.name, 'Quantity:', this.count)
    },
    orderProduct() {
      setTimeout(() => {
        this.showSuccess = true
      }, 1000)
    }
  }
}
</script>
