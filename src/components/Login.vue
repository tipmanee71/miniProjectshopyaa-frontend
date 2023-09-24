<template>
  <v-container>
    <v-row class="card">
      <v-col cols="12">
        <v-card class="card-size">
          <v-card-title class="text-h2">เข้าสู่ระบบ</v-card-title>

          <v-card-text>
            <v-form ref="from" v-model="valid" lazy-validation>
              <v-text-field
                :rules="nameRules"
                :counter="20"
                placeholder="ชื่อผู้ใช้งาน"
                v-model="username"
                required
                outlined
                hide-details
                class="custom-input"
              >
              </v-text-field>

              <v-text-field
                placeholder="รหัสผ่าน"
                v-model="password"
                type="password"
                :rules="passwordRules"
                required
                hide-details
                outlined
                class="custom-input"
              >
              </v-text-field>

              <v-row>
                <v-btn
                  :disabled="!valid"
                  type="submit"
                  color="#45C69F"
                  class="login-sub mx-auto"
                  @click="login"
                >
                  เข้าสู่ระบบ
                </v-btn>
              </v-row>

              <v-row>
                <h6>ยังไม่ได้ลงทะเบียนบัญชี</h6>
                <h6 @click="register">ไปที่หน้าลงทะเบียน</h6>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: '',
    nameRules: [
      (v) => !!v || 'กรุณากรอกชื่อผู้ใช้งาน',
      (v) => (v && v.length <= 10) || 'ห้ามกรอกชื่อผุ้ใช้งานเกิน20ตัวอักษร'
    ],

    password: '',
    passwordRules: [(v) => !!v || 'กรุณากรอกรหัสผ่าน']
  }),
  methods: {
    login() {
      if (this.$refs.form.validate(true)) {
        console.log('Logging in with username:', this.username)
        console.log('Logging in with password:', this.password)
        this.$EvenBus.$emit('getUsername')
        this.$router.push({ path: '/home' }).catch(() => {})
      }
    },
    register() {
      this.$router.push({ path: '/register' }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.card {
  justify-content: center;
  align-items: center;
}
.card-size {
  height: 400px;
  width: 100%;
  padding: auto;
  margin: 5%;

  justify-content: center;
  align-items: center;
}
.text-h2 {
  align-items: center;
  justify-content: center;
}

.custom-input {
  border: 2px solid #ccc;
  background-color: #7d91dc;
  /* Background color */
  border-radius: 20px;
  /* Border radius (rounded corners) */
  padding: 10px;
  /* Adjust padding as needed */
  margin-bottom: 30px;
  /* Spacing between text fields */
  text-align: center;
  /* Center text horizontally */
}

.login-sub {
  padding: 10px;
  border-radius: 20px;
  background-color: #45c69f;
  width: 60%;
  text-align: center;
  margin-top: 3%;
}
</style>
