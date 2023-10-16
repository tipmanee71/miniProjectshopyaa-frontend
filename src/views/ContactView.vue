<template>
  <div class="background-con">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="6"
          style="
            display: flex;
            align-items: left;
            justify-content: left;
            /* margin-bottom: 15%; */
            margin-right: 30%;
          "
        >
          <v-img
            src="../assets/contact.jpg"
            style="
              width: 600px;
              height: 600px;
              align-items: left;
              justify-content: left;
              margin-top: 15%;
            "
          ></v-img>
        </v-col>
        <v-col
          cols="6"
          style="display: flex; align-items: center; justify-content: center"
        >
          <Contact />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'
export default {
  components: {
    Contact
  }
}
</script>

<style scoped>
.background-con {
  background-color: #fff;
  width: 100%;
}
</style>
