<template>
  <v-row>
    <v-row justify="center">
      <v-col cols="12" class="all">
        <v-card-actions>
          <v-checkbox
            v-model="selectAll"
            color="indigo"
            label="เลือกทั้งหมด"
            value="indigo"
            @change="selectAllItems"
          >
          </v-checkbox>
        </v-card-actions>
      </v-col>
    </v-row>

    <v-col cols="12">
      <v-card
        v-for="item in cartItems"
        :key="item.id"
        max-width="100%"
        style="border-radius: 15px; background-color: #ace5f8; margin: 2%"
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

          <v-col cols="2">
            <v-card-title>
              {{ item.product.pdName }}
            </v-card-title>
          </v-col>

          <v-col cols="2"> ราคา {{ item.product.pdPrice }} บาท</v-col>

          <v-col cols="2">
            <h4>จำนวน: {{ item.cartsQty }}</h4>
          </v-col>
          <v-col cols="2">
            <h3>ราคารวม: {{ totalpriceitem(item) }}</h3>
          </v-col>

          <v-card-actions>
            <v-checkbox v-model="item.selected" color="indigo" value="indigo">
            </v-checkbox>
            <v-btn
              small
              outlined
              depressed
              color="red"
              @click="deleteCartItem(item.id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="12">
      <div style="flex-grow: 1; justify-content: end; margin-top: 20px">
        <v-card
          max-width="100%"
          style="border-radius: 15px; background-color: #bfcbf9; margin: 2%"
          :elevation="8"
        >
          <v-row justify="space-between">
            <v-col
              cols="2"
              class="d-flex justify-start"
              style="margin-left: 5%; align-items: center"
            >
              รวมทั้งสิ้น :{{ selectedTotalPrice }} บาท
            </v-col>

            <v-col cols="4" class="d-flex justify-end">
              <v-btn
                @click="orderProduct"
                color="#7D91DC"
                style="margin-right: 5%; align-items: center"
              >
                สั่งซื้อ
              </v-btn>
            </v-col>
            <v-dialog v-model="showSuccess" max-width="500px">
              <div class="text-center">
                <v-card color="green">
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
      product: {},
      deleteStatus: null
    }
  },
  computed: {
    isAuth() {
      return false
    },

    totalpriceitem() {
      return (item) => item.product.pdPrice * item.cartsQty
    },

    selectedTotalPrice() {
      let total = 0
      for (const item of this.cartItems) {
        if (item.selected) {
          total += this.totalpriceitem(item)
        }
      }
      return total
    }
  },
  methods: {
    async orderProduct() {
      const selectedItems = this.cartItems
        .filter((item) => item.selected)
        .map((item) => {
          return {
            cartsId: item.id,
            cartsQty: item.cartsQty
          }
        })
      if (selectedItems.length > 0) {
        try {
          const response = await axios.post(
            'http://localhost:9000/create-order-item',
            selectedItems
          )
          console.log('Success', response)

          // Check the HTTP status code of the response
          if (response.status === 200) {
            // Handle a successful response
            console.log('Success', response.data)
            this.showSuccess = true // Display asuccess message or dialog
          } else {
            console.error('Request failed with status code', response.status)
            console.error('Response data:', response.data)
          }
        } catch (error) {
          console.error('Error while ordering:', error)
        }
      } else {
        alert('กรุณาเลือกสินค้าก่อนสั่งซื้อ')
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
    },
    async deleteCartItem(cartsId) {
      try {
        const response = await axios.delete(
          'http://localhost:9000/remove/' + cartsId
        )

        if (response.status === 200) {
          console.log('Item deleted successfully')
          this.deleteStatus = ' Deleted success'
          alert('Item deleted successfully')

          window.location.reload()
        } else {
          console.error('Failed to delete item:', response.statusText)
          this.deleteStatus = ' Deleted error'
        }
      } catch (error) {
        console.error('Error deleting item:', error)
        this.deleteStatus = 'Deleted error'
      }
    }
  },

  created() {
    // Fetch cart items from the API endpoint
    axios
      .get('http://localhost:9000/cart')
      .then((response) => {
        this.cartItems = response.data.map((item) => {
          item.cartsQty
          item.id = item.cartsId
          return item
        })
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error)
      })
  }
}
</script>
<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
