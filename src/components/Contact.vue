<template>
  <div>
    <v-container>
      <v-row
        justify="space-between"
        style="align-items: center; justify-content: center"
      >
        <v-col cols="12">
          <h1>ติดต่อเรา</h1>
        </v-col>
        <v-col cols="12">
          <p>
            1080/52456 หมู่บ้านดาวยาอังคาร ตำบล ยาพิษวิเศษ อำเภอกินไม่หาย
            จังหวัดสาบสูญ 85214
          </p> </v-col
        ><v-col cols="12">
          <svg-icon type="mdi" :path="mdiPhone" class="tel-icon"></svg-icon>
          <a
            href="https://www.facebook.com/profile.php?id=100007546908620"
            target="_blank"
          >
            095-2586831
          </a>
        </v-col>

        <v-col cols="12">
          <svg-icon type="mdi" :path="mdiFacebook" class="face-icon"></svg-icon>
          <a
            href="https://www.facebook.com/profile.php?id=100007546908620"
            target="_blank"
          >
            Facebook
          </a>
        </v-col>
        <v-col cols="12">
          <svg-icon
            type="mdi"
            :path="mdiYoutube"
            class="youtube-icon"
          ></svg-icon>
          <a
            href="https://www.youtube.com/your-youtube-channel-url"
            target="_blank"
          >
            Youtube
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFacebook, mdiYoutube, mdiPhone } from '@mdi/js'

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      mdiFacebook,
      mdiYoutube,
      mdiPhone
    }
  }
}
</script>

<style>
.tel-icon {
  width: 64px;
  color: #11e245;
}
.face-icon {
  width: 64px;
  color: #1877f2;
}
.youtube-icon {
  width: 64px;
  color: #ea1a1a;
}
</style>
