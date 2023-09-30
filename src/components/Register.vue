<template>
  <v-container>
    <v-row class="card">
      <v-col cols="12">
        <v-card class="card-size">
          <v-card-title class="text-h2">เพิ่มบัญชีผู้ใช้งาน</v-card-title>
          <v-card-text>
            <v-form ref="form" :value="isFormValid" lazy-validation>
              <v-text-field
                placeholder="ชื่อผู้ใช้งาน"
                v-model="usersName"
                required
                hide-details
                outlined
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="ชื่อจริง"
                v-model="usersFirst"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="นามสกุล"
                v-model="usersLast"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="เบอร์โทรศัพท์"
                v-model="usersPhone"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="อีเมล"
                v-model="usersEmail"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="ตั้งค่ารหัสผ่าน"
                v-model="usersPass"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>
              <v-text-field
                placeholder="เพิ่มที่อยู่"
                v-model="usersAddress"
                required
                outlined
                hide-details
                class="custom-input"
              ></v-text-field>

              <v-row>
                <v-btn
                  type="submit"
                  color="#45C69F"
                  class="regis-sub mx-auto"
                  @click.prevent="submitForm"
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
import axios from 'axios'

export default {
  data() {
    return {
      usersName: '',
      usersFirst: '',
      usersLast: '',
      usersEmail: '',
      usersAddress: '',
      usersPass: '',
      usersPhone: '',
      isFormValid: false
    }
  },
  methods: {
    async submitForm() {
      if (
        !this.usersName ||
        !this.usersFirst ||
        !this.usersLast ||
        !this.usersPhone ||
        !this.usersEmail ||
        !this.usersPass ||
        !this.usersAddress
      ) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน.')
        return
      }

      const userData = {
        usersName: this.usersName,
        usersFirst: this.usersFirst,
        usersLast: this.usersLast,
        usersPhone: this.usersPhone,
        usersEmail: this.usersEmail,
        usersPass: this.usersPass,
        usersAddress: this.usersAddress
      }

      try {
        var response = await this.axios.post(
          'http://localhost:9000/user/register',
          userData
        )
        console.log('Data:', response.data)

        if (response.status === 200) {
          // Registration successful
          this.$router.push({ path: '/login' }).catch(() => {})
        } else {
          // Handle other status codes or response data as needed
          console.error('Unexpected status code:', response.status)
          console.error('Response Data:', response.data)
        }
      } catch (error) {
        console.error('Error:', error)

        // Check if there's a response in the error (e.g., a network error)
        if (error.response) {
          console.error('Error Response Data:', error.response.data)
          console.error('Error Response Status:', error.response.status)
        }
      }
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

.regis-sub {
  padding: 10px;
  border-radius: 20px;

  width: 60%;
  text-align: center;
  margin-top: 3%;
}
</style>
