<template>
  <div class="bgedit">
    <v-container>
      <v-row>
        <v-col cols="12">
          <EditUser />
        </v-col> </v-row
    ></v-container>
  </div>
</template>

<script>
import EditUser from '@/components/EditUser.vue'
export default {
  components: {
    EditUser
  }
}
</script>

<style>
.bgedit {
  background-color: #ace5f8;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
