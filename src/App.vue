<template>
  <v-app class="overflow-hidden">
    <v-app-bar elevation="23" flat outlined color="#E3F2FD" rounded shaped>
      <v-toolbar-title style="color: #06275f; margin-left: 3%; margin-top: 3%">
        <h1 class="font-weight-black">Praewa Phamacisy</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs class="custom-toolbar-title" right style="margin-right: 10%">
          <v-tab @click="home()" style="color: #06275f">หน้าแรก</v-tab>

          <v-tab @click="allproduct()" style="color: #06275f"
            >สินค้าทั้งหมด</v-tab
          >
          <v-tab @click="contact()" style="color: #06275f">ติดต่อ</v-tab>
        </v-tabs>
      </template>

      <v-btn icon @click="cart">
        <svg-icon
          type="mdi"
          :path="mdiCartVariant"
          style="color: #06275f"
          class="icon"
        />
      </v-btn>

      <v-btn color="#45c69f" @click="toggleLogin" v-if="!isAuth"
>
        {{ loggedIn ? '' : 'เข้าสู่ระบบ' }}
      </v-btn>

      <v-btn icon v-if="isAuth">
        <v-avatar class="profile">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          /> </v-avatar
      ></v-btn>
    </v-app-bar>

    <v-main class="full-height">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartVariant } from '@mdi/js'

export default {
  name: 'App',

  components: {
    SvgIcon
  },

  data: () => ({
    mdiCartVariant,
    auth: null
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
      },
      deep: true
    }
  },

  created() {
    this.getAuth()
  },

  methods: {
    toggleLogin() {
      this.$router.push({ path: '/login' }).catch(() => {})
    },
    home() {
      this.$router.push({ path: '/' }).then(()=>{window.location.reload()}).catch(() => {})
      
    },

    allproduct() {
      this.$router.push({ path: '/allproduct' }).catch(() => {})
    },

    contact() {
      this.$router.push({ path: '/contact' }).catch(() => {})
    },

    cart() {
      this.$router.push({ path: '/cart' }).catch(() => {})
    },
    isAuth() {
      return this.auth !== null ? true : false
    },
    getAuth() {
      this.auth = JSON.parse(localStorage.getItem('auth'))
    }
  }
}
</script>

<style>
.appbar {
  overflow: hidden;
  height: 100%;
  margin-bottom: 5%;
}

.profile {
  display: flex;
  justify-content: end;
  align-items: end;
}
.contnt-card {
  margin: 5%;
}
.full-height {
  /*overflow: auto; */
  /* overflow-y: auto; */
  width: 100%;
  height: 100%;
}
.icon {
  margin-right: 20%;
  align-items: center;
  width: 50px;
  height: 50px;
}
</style>
