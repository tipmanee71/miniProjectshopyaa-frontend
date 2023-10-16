<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <div @click="handleProductClick(product)">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="'data:image/jpeg;base64,' + product.pdImage"
              alt="Product Image"
            >
              <v-card-title style="color: #06275f; font-weight: 800">{{
                product.pdName
              }}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>วันที่ผลิด: {{ formatDate(product.pdMfg) }}</div>
              <div>วันที่หมดอายุ: {{ formatDate(product.pdExp) }}</div>
              <div>ผู้ผลิต: {{ product.pdManufacturer }}</div>
            </v-card-text>

            <v-card-actions>
              <v-row>
                <v-col cols="6" class="text-left">
                  <v-btn color="orange" text style="font-weight: bold">
                    {{ product.pdPrice }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartArrowUp } from '@mdi/js'

export default {
  name: 'MyComponent',
  components: {
    SvgIcon
  },

  data: () => ({
    path: mdiCartArrowUp,
    products: [],
    pdImage: '', // Define pdImage here
    pdName: '', // Define pdName here
    pdManufacturer: '', // Define pdManufacturer here
    pdExp: '', // Define pdExp
    pdMfg: '', // Define pdMfg here
    pdPrice: 0 // Define pdPrice here
  }),

  methods: {
    handleProductClick(product) {
      this.$router.push({ name: 'ProductDetail', params: { id: product.id } })
    },

    formatDate(date) {
      // Format a JavaScript Date object to a readable date string
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-US', options)
    },

    async fetchDataFromBackend() {
      this.products = []
      try {
        var response = await this.axios.get('http://localhost:9000/products')
        this.products = response.data
        console.log('data ===>', response)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  },

  mounted() {
    // Fetch data from the backend when the component is mounted
    this.fetchDataFromBackend()
  }
}
</script>

<style></style>
