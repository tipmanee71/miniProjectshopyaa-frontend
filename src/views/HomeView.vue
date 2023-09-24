<template>
  <div class="background">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="4"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            /* margin-bottom: 15%; */
          "
        >
          <Home />
        </v-col>
        <v-col cols="8">
          <v-img
            src="../assets/homeimg1.png"
            style="
              width: 850px;
              height: 600px;
              align-items: center;
              justify-content: right;
              margin-top: 10%;
              margin-left: 10%;
            "
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style>
.background {
  /* Background image URL */
  background-image: url('~@/assets/bg.jpg'); /* Use the
imported variable */ /* Update the URL as needed */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
