<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          width="100%"
          style="border-radius: 15px; background-color: #fff"
        >
          <v-card-title
            class="text-h3 text-center"
            style="color: #06275f; font-weight: 800; justify-content: center"
            >ข้อมูลโปรไฟส์
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          width="100%"
          style="border-radius: 15px; background-color: #fff; color: #06275f"
        >
          <v-card-actions>
            <v-btn
              x-large
              outlined
              color=""
              @click="openEditDialog"
              class="ml-auto"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-text class="text-h6" style="color: #06275f"
            >Username : {{ auth.usersName }}
          </v-card-text>
          <v-divider class="my-4"></v-divider>
          <v-card-text class="text-h6" style="color: #06275f"
            >First Name : {{ auth.usersFirst }}
          </v-card-text>
          <v-divider class="my-4"></v-divider>
          <v-card-text class="text-h6" style="color: #06275f"
            >Last Name : {{ auth.usersLast }}
          </v-card-text>
          <v-divider class="my-4"></v-divider>

          <v-card-text class="text-h6" style="color: #06275f"
            >Number Phone: {{ auth.usersPhone }}
          </v-card-text>
          <v-divider class="my-4"></v-divider>
          <v-card-text class="text-h6" style="color: #06275f"
            >Address : {{ auth.usersAddress }}
          </v-card-text>

          <v-divider class="my-4"></v-divider>

          <v-dialog v-model="editDialog" max-width="500">
            <v-card>
              <v-card-title>แก้ไข้ ข้อมูลโปรไฟส์ </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="editedUser.usersName"
                  label="UserName"
                  class="ml-3"
                >
                </v-text-field>
                <v-text-field
                  v-model="editedUser.usersFirst"
                  label="First Name"
                  class="ml-3"
                >
                </v-text-field>
                <v-text-field
                  v-model="editedUser.usersLast"
                  label="Last Name"
                  class="ml-3"
                >
                </v-text-field>
                <v-text-field
                  v-model="editedUser.usersAddress"
                  label="Address"
                  class="ml-3"
                >
                </v-text-field>
                <v-text-field
                  v-model="editedUser.usersPhone"
                  label="Number Phone"
                  class="ml-3"
                >
                </v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" @click="saveUser">Save</v-btn>
                <v-btn @click="closeEditDialog">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      auth: {
        usersId: null,
        usersName: '',
        usersPass: '',
        usersFirst: '',
        usersLast: '',
        usersEmail: '',
        usersAddress: '',
        usersPhone: ''
      },
      editDialog: false,
      editedUser: {
        usersName: '',
        usersPass: '',
        usersFirst: '',
        usersLast: '',
        usersEmail: '',
        usersAddress: '',
        usersPhone: ''
      }
    }
  },
  mounted() {
    this.getAuth() // Call the getAuth method to populate the auth object from local storage
  },
  methods: {
    getAuth() {
      this.auth = JSON.parse(localStorage.getItem('auth'))
      this.editedUser = { ...this.auth }
    },
    openEditDialog() {
      this.editDialog = true
    },
    closeEditDialog() {
      this.editDialog = false
    },
    saveUser() {
      var data = {
        usersName: this.editedUser.usersName,
        usersPass: this.editedUser.usersPass,
        usersPass: this.editedUser.usersPass,
        usersFirst: this.editedUser.usersFirst,
        usersLast: this.editedUser.usersLast,
        usersEmail: this.editedUser.usersEmail,
        usersAddress: this.editedUser.usersAddress,
        usersPhone: this.editedUser.usersPhone
      }
      // Make a PUT request to update the user information
      axios
        .put('http://localhost:9000/user/edit/' + this.auth.usersId, data)
        .then((response) => {
          // Handle a successful response (e.g., show a success message)
          console.log('User information updated successfully', response.data)
          console.log('dataResponse ===>', this.editedUser)

          console.log('dataResponse ===>', data)

          // Optionally, you can update the 'auth' object with the updated data from the response
          this.auth = response.data
          localStorage.setItem('auth', JSON.stringify(this.auth))

          // Close the edit dialog
          this.closeEditDialog()
        })
        .catch((error) => {
          // Handle errors (e.g., show an error message)
          console.error('Error updating user information', error)
        })
    }
  }
}
</script>
<style scoped>
.text-h6 {
  font-size: 1.5rem; /* Adjust the font size as needed */
}
</style>
