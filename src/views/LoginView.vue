<template>
  <v-row justify="space-between" style="background-color: #ace5f8">
    <v-col cols="6" class="fromlogin">
      <Login />
    </v-col>
    <v-col cols="6">
      <ImgLogin />
    </v-col>
  </v-row>
</template>

<script>
import Login from '@/components/Login.vue' // Adjust the import path based on your project's structure
import ImgLogin from '@/components/ImgLogin.vue'
export default {
  components: {
    Login, // Register the Login component for use in the template
    ImgLogin
  }
}
</script>

<style scoped>
.fromlogin {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 10%; */
}
</style>
