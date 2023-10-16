<template>
  <div>
    <h1 class="font-weight-black" style="font-size: 40px; color: #06275f">
      PRAEWA PHAMACY
    </h1>
    <p>ihkodSfnlblkfbls/Kdeb r/b k; em/k bkldflgwr;</p>
    <v-btn color="#45c69f" @click="allproduct">เริ่มสั่งซื้อ</v-btn>
    <!-- <v-btn color="#45c69f" @click="login" v-if="!loggedIn">เข้าสู่ระบบ</v-btn> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // loggedIn: false
    }
  },
  methods: {
    // login() {
    //   this.loggedIn = true
    //   this.$router.push({ path: '/login' }).catch(() => {})
    // }
    allproduct() {
      this.$router.push({ path: '/allproduct' }).catch(() => {})
      window.location.reload()
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
