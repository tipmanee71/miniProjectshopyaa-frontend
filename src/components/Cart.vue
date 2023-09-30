<template>
  <v-row>
    <v-col cols="12" class="all">
      <v-card-actions>
        <v-checkbox
          v-model="selectAll"
          color="indigo"
          label="เลือกทั้งหมด"
          value="indigo"
          @change="selectAllItems"
        ></v-checkbox>
      </v-card-actions>
    </v-col>

    <v-col cols="12">
      <v-card
        v-for="item in cartItems"
        :key="item.id"
        max-width="100%"
        style="border-radius: 15px; background-color: #ace5f8"
      >
        <v-row justify="center" align="center">
          <v-col cols="2">
            <v-img
              class="white--text align-end"
              width="200px"
              height="200px"
              style="margin-left: 3%"
              :src="
                item.product.pdImage
                  ? 'data:image/jpeg;base64,' + item.product.pdImage
                  : ''
              "
              alt="Product Image"
            />
          </v-col>

          <v-col cols="3">
            <v-card-title>
              {{ item.product.pdName }}
            </v-card-title>
          </v-col>

          <v-col cols="2"> ราคา {{ item.product.pdPrice }} บาท</v-col>

          <v-col cols="2">
            <h4>จำนวน: {{ item.cartsQty }}</h4>
          </v-col>
          <v-col cols="2">
            <h3>ราคารวม: {{ item.product.pdPrice * item.cartsQty }}</h3>
          </v-col>

          <v-card-actions>
            <v-checkbox v-model="item.selected" color="indigo" value="indigo">
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
            <v-col
              cols="2"
              class="d-flex justify-start"
              style="margin-left: 2%"
            >
              รวมทั้งสิ้น :{{ selectedTotalPrice }} บาท
            </v-col>

            <v-col cols="4" class="d-flex justify-end">
              <v-btn @click="orderProduct" color="#7D91DC"> สั่งซื้อ </v-btn>
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
import Count from './Count.vue'
import axios from 'axios'
export default {
  components: {
    Count
  },
  props: {},
  data() {
    return {
      cartItems: [],
      cartsQty: [],
      selectAll: false,
      showSuccess: false,
      product: {}
    }
  },
  computed: {
    isAuth() {
      return false
    }, // A computed property with no setter }, },
    selectedTotalPrice() {
      return this.cartItems.reduce((total, item) => {
        if (item.selected) {
          return total + item.product.pdPrice * item.cartsQty
        }
        return
        total
      }, 0)
    },
    isAuth() {
      return false
    }
  },
  methods: {
    orderProduct() {
      // Check if at least one item is selected
      const isAtLeastOneItemSelected = this.cartItems.some(
        (item) => item.selected
      )
      if (isAtLeastOneItemSelected) {
        // If at least one item is selected, show thesuccess message
        this.showSuccess = true
      } else {
        // If no item is selected, youcan show an error message or take appropriate action
        // For example, you can setan error message property and display it to the user.
        alert('กรุณาเลือกอย่างน้อยหนึ่งรายการก่อนสั่งซื้อ!', this.errorMessage)
      }
    },
    // ... (your othermethods) ...

    selectAllItems() {
      for (const item of this.cartItems) {
        item.selected = this.selectAll
      }
    },
    checkAuth() {
      // Implement authentication logic here
    },

    addToCart() {
      console.log(
        'Added to cart:',
        this.product.pdName,
        'Quantity:',
        this.item.cartsQty
      )
    }
  },
  created() {
    // Fetch cart items from the API endpoint
    axios
      .get('http://localhost:9000/cart')
      .then((response) => {
        this.cartItems = response.data.map((item) => {
          item.cartsQty
          return item
        })
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error)
      })
  }
}
</script>
