<template>
  <div>
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
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
