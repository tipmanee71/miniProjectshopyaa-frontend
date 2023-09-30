<template>
  <div style="background-color: #ace5f8">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="6">
          <ImgLogin />
        </v-col>
        <v-col cols="6" class="fromregis">
          <Register />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Register from '@/components/Register.vue' // Adjust the import path based on your project's structure
import ImgLogin from '@/components/ImgLogin.vue'
export default {
  components: {
    Register,
    ImgLogin
  }
}
</script>

<style>
.fromregis {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
