<template>
  <div>
    <h1>Product Detail</h1>

    <div>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <!-- Display other product details here -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'], // This is provided by the route parameter
  data() {
    return {
      product: null
    }
  },
  created() {
    // Fetch product details based on the 'id' route parameter
    this.fetchProductDetails(this.id)
  },
  methods: {
    fetchProductDetails(id) {
      // Simulate fetching data based on 'id'
      // Replace this with an actual API call in a real application
      // Sample product data (replace with actual data fetching)
      this.product = {
        name: 'Product Name',
        description: 'Product Description'
        // Other product details
      }
    }
  }
}
</script>
