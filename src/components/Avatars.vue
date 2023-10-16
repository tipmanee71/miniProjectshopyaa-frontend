<template>
  <v-container>
    <v-row justify="center">
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="#45c69f" @click="toggleLogin" v-if="!isAuth">
            {{ loggedIn ? '' : 'เข้าสู่ระบบ' }}
          </v-btn>
          <v-btn
            icon
            x-large
            v-on="on"
            v-if="isAuth"
            @click="toggleProfileCard"
            class="profile-button"
          >
            <v-avatar color="brown" size="48">
              <span class="white--text text-h5">{{ usersName }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card
          v-if="isProfileCardVisible"
          class="profile-card"
          max-width="400"
          width="400"
        >
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <h3 style="color: black">
                {{ auth.usersName }}
              </h3>

              <p class="text-caption mt-1" style="color: black">
                {{ authuserEmail }}
              </p>

              <v-btn depressed rounded text @click="EditUser">
                ข้อมูลโปรไฟส์
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="viewOrders">
                ออเดอร์ของฉัน
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout">ออกจากระบบ</v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isProfileCardVisible: false,
    auth: {
      usersId: null,
      usersName: '',
      usersPass: '',
      usersFirst: '',
      usersLast: '',
      usersEmail: '',
      usersAddress: '',
      usersPhone: ''
    }
  }),
  computed: {
    isAuth() {
      return !!this.auth
    }
  },
  watch: {
    auth: {
      handler(newAuth) {
        if (newAuth !== null) {
          this.isAuth = true
        } else {
          this.isAuth = false
        }
        this.usersName = newAuth ? newAuth.name : ''
        this.userEmail = newAuth ? newAuth.email : ''
      },
      deep: true
    }
  },
  mounted() {
    this.getAuth()
    // Call the getAuth method to populate the authobject from local storage
  },

  created() {
    this.getAuth(), this.getAuthFromLocalStorage()
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeCardOnClickOutside)
  },

  methods: {
    EditUser() {
      this.$router.push({ path: '/EditUser' }).catch(() => {})
      window.location.reload()
    },

    getAuthFromLocalStorage() {
      authData = JSON.parse(localStorage.getItem('auth'))
      if (authData) {
        this.auth = authData
      }
    },

    toggleLogin() {
      this.$router.push({ path: '/login' }).catch(() => {})
      window.location.reload()
    },
    toggleProfileCard() {
      this.isProfileCardVisible = !this.isProfileCardVisible
    },
    viewOrders() {
      // Implement your viewOrders logic here
    },
    logout() {
      localStorage.removeItem('auth')
      this.auth = null
      // Set auth to null or clear any other user-related data
      // Redirect to the login page or perform any other desired action ,
      this.$router.push({ path: '/login' }).catch(() => {})
      window.location.reload()
    },
    getAuth() {
      this.auth = JSON.parse(localStorage.getItem('auth'))
    },
    closeCardOnClickOutside(event) {
      if (this.isProfileCardVisible) {
        const card = this.$refs.profileCard
        if (card && !card.contains(event.target)) {
          this.isProfileCardVisible = false
        }
      }
    }
  }
}
</script>

<style scoped>
.profile-button {
  position: relative;
}
.profile-card {
  position: relative;
  margin-top: 20%;
}
</style>
