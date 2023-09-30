<template>
  <v-container>
    <v-row class="card">
      <v-col cols="12">
        <v-card class="card-size">
          <v-card-title class="text-h2">เข้าสู่ระบบ</v-card-title>

          <v-card-text>
            <v-form
              @submit.prevent="performLogin"
              ref="from"
              v-model="isLoggingIn"
              :v-bind="valid"
              lazy-validation
            >
              <v-text-field
                :counter="20"
                placeholder="อีเมล"
                v-model="usersEmail"
                required
                outlined
                hide-details
                class="custom-input"
              >
              </v-text-field>

              <v-text-field
                placeholder="รหัสผ่าน"
                v-model="usersPass"
                :rules="passwordRules"
                required
                hide-details
                outlined
                class="custom-input"
              >
              </v-text-field>

              <v-row>
                <v-btn
                  type="submit"
                  color="#45C69F"
                  class="login-sub mx-auto"
                  @click="performLogin"
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
  data() {
    return {
      valid: true,
      usersEmail: '',
      usersPass: '',
      isLoggingIn: false,
     

      // nameRules: [
      //   (v) => !!v || 'กรุณากรอกชื่อผู้ใช้งาน',
      //   (v) => (v && v.length <= 10) || 'ห้ามกรอกชื่อผู้ใช้งานเกิน 20 ตัวอักษร'
      // ],
      passwordRules: [(v) => !!v || 'กรุณากรอกรหัสผ่าน']
    }
  },
  methods: {
    async performLogin() {
      this.isLoggingIn = true
      try {
        var response = await this.axios.post(
          'http://localhost:9000/user/login',
          {
            usersEmail: this.usersEmail,
            usersPass: this.usersPass
          }
        )

        if (response.status === 200) {
          // Login successful
          // this.userAvatar = response.data.avatar
          localStorage.setItem('auth', JSON.stringify(response.data))
          const auth = JSON.parse(localStorage.getItem('auth'))
          console.log(auth)

          this.$router
            .push({ path: '/' })
            .then(() => {
              window.location.reload()
            })
            .catch(() => {})

          console.log('Login successful')
        } else {
          // Handle other response statuses (e.g., 401 for unauthorized)
          console.log('Login failed')
        }
      } catch (error) {
        // Handle any network or server errors
        console.error('Error:', error.message)
      } finally {
        this.isLoggingIn = false
      }
    },
    register() {
      this.$router.push({ path: '/register' }).catch(() => {})
    }
  }
}
</script>

<style scoped>
AC.card {
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
