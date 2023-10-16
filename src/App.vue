<template>
  <v-app>
    <v-app-bar elevation="23" flat outlined color="#E3F2FD" rounded shaped>
      <v-toolbar-title style="color: #06275f; margin-left: 3%; margin-top: 3%">
        <h1 class="font-weight-black">Praewa Pharmacy</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs class="custom-toolbar-title" right style="margin-right: 10%">
          <v-tab
            @click="home()"
            class="tab-text"
            style="color: #06275f; font-weight: bold"
            >หน้าแรก</v-tab
          >
          <v-tab
            @click="allproduct()"
            class="tab-text"
            style="color: #06275f; font-weight: bold"
            >สินค้าทั้งหมด</v-tab
          >
          <v-tab
            @click="contact()"
            class="tab-text"
            style="color: #06275f; font-weight: bold"
            >ติดต่อ</v-tab
          >
        </v-tabs>
      </template>
      <template>
        <v-btn icon @click="cart" style="font-size: 24px">
          <svg-icon
            type="mdi"
            :path="mdiCartVariant"
            style="color: #06275f; margin-top: 10%"
            class="icon"
          />
        </v-btn>
        <div class="profile">
          <Profile />
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartVariant } from '@mdi/js'
import Profile from './components/Avatars.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',

  components: {
    SvgIcon,
    Profile,
    Footer
  },

  data: () => ({
    mdiCartVariant,
    auth: null
    // isProfileCardVisible: false
  }),
  // computed: {
  //   isAuth() {
  //     return !!this.auth
  //   }
  // },
  // watch: {
  //   auth: {
  //     handler(newAuth) {
  //       if (newAuth !== null) {
  //         this.isAuth = true
  //       } else {
  //         this.isAuth = false
  //       }
  //     },
  //     deep: true
  //   }
  // },

  // created() {
  //   this.getAuth()
  // },

  methods: {
    // toggleLogin() {
    //   this.$router.push({ path: '/login' }).catch(() => {})
    //   window.location.reload()
    // },
    home() {
      this.$router
        .push({ path: '/' })
        .then(() => {
          window.location.reload()
        })
        .catch(() => {})
      window.location.reload()
    },

    allproduct() {
      this.$router.push({ path: '/allproduct' }).catch(() => {})
      window.location.reload()
    },

    contact() {
      this.$router.push({ path: '/contact' }).catch(() => {})
      window.location.reload()
    },

    cart() {
      this.$router.push({ path: '/cart' }).catch(() => {})
    },

    getAuth() {
      this.auth = JSON.parse(localStorage.getItem('auth'))
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  height: 100%;
}

.contnt-card {
  margin: 5%;
}
.full-height {
  width: 100%;
  background-image: url('~@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
}
.icon {
  margin-right: 20%;
  align-items: center;
  width: 50px;
  height: 50px;
}
.tab-text {
  font-size: 16px;
}
@media (max-width: 768px) {
  .tab-text {
    font-size: 14px; /* Adjust the font size
for smaller screens */
  }
}
</style>
