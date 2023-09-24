<!-- //AllProduct.vue -->
<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <router-link :to="'/product/' + product.id" :key="product.id">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="product.imageUrl"
            >
              <v-card-title>{{ product.name }}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <!-- <div>{{ product.description }}</div> -->
              <div>วันที่ผลิด: {{ product.manufactureDate }}</div>
              <div>วันที่หมดอายุ: {{ product.expiryDate }}</div>
              <div>ผู้ผลิต: {{ product.manufacturer }}</div>
            </v-card-text>

            <v-card-actions>
              <v-row>
                <v-col cols="6" class="text-left">
                  <v-btn color="orange" text> {{ product.price }} </v-btn>
                </v-col>
                <v-col cols="6" class="text-right">
                  <svg-icon type="mdi" :path="path"></svg-icon>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartArrowUp } from '@mdi/js'
import { productData } from '../store/productData.js'

export default {
  name: 'my-component',
  components: {
    SvgIcon
  },

  data() {
    return {
      path: mdiCartArrowUp,
      products: productData
    }
  }
}
</script>

<style></style>
