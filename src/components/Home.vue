<template>
  <div>
    <h1>PRAEWA PHAMACY</h1>
    <p>ihkodSfnlblkfbls/Kdeb r/b k; em/k bkldflgwr;</p>
    <button class="slide-button" @click="slideDown">เริ่มสั่งซื้อ</button>
    <button class="slide-button" @click="login">เข้าสู่ระบบ</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ path: '/login' }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.slide-button {
  background-color: #45c69f; /* Button background color */
  color: white; /* Text color */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}
.slide-button:hover {
  background-color: #349879; /* Change color on hover */
}
</style>
