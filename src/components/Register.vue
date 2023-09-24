<template>
  <v-container>
    <v-row class="card">
      <v-col cols="12">
        <v-card class="card-size">
          <v-card-title class="text-h2">เพิ่มบัญชีผู้ใช้งาน</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                placeholder="ชื่อผู้ใช้งาน"
                v-model="username"
                required
                hide-details
                outlined
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="ชื่อจริง"
                v-model="fristname"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="นามสกุล"
                v-model="lastname"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="เบอร์โทรศัพท์"
                v-model="tel"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="อีเมล"
                v-model="email"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="ตั้งค่ารหัสผ่าน"
                v-model="password"
                type="password"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="เพิ่มที่อยู่"
                v-model="address"
                type="address"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>

              <v-row>
                <v-btn
                  type="submit"
                  color="#45C69F"
                  class="login-sub mx-auto"
                  @click="goToLogin"
                >
                  ลงทะเบียน
                </v-btn>
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
    username: '',
    password: '',
    fristname: '',
    lastname: '',
    email: '',
    tel: '',
    address: ''
  }),
  methods: {
    goTologin() {
      console.log('Logging in with email:', this.email)
      console.log('Logging in with password:', this.password)
    }
  }
}
</script>
<style>
.card {
  justify-content: center;
  align-items: center;
}

.card-size {
  height: 100%;
  width: 100%;

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
