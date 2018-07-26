<template>
  <div class="watch">
    <div class="watch-wrapper">
      <div class="dplaycontainer" @click="playVidio" ref="dplayer">
        <!-- <video id="videoElement" width="854px" height="480px"></video> -->
      </div>
    </div>
  </div>
</template>

<script>
import DPlayer from 'DPlayer'
export default {
  mounted () {
    if (!this.play) {
      this.videoUrl = 'http://vd3.bdstatic.com/mda-ign01sy8zcinh25z/mda-ign01sy8zcinh25z.mp4'
      this.player = new DPlayer({
        container: this.$refs.dplayer,
        screenshot: true,
        video: {
          url: this.videoUrl,
          // pic: 'http://www.dilidili.wang/uploads/allimg/180722/290_2347529091.jpg'
          thumbnails: 'http://www.dilidili.wang/uploads/allimg/180722/290_2347529091.jpg'
        }
      })
    } else {
      console.log('else')
      if (this.player.video.currentSrc !== this.videoUrl) {
        this.player.switchVideo({
          url: this.videoUrl,
          pic: 'http://www.dilidili.wang/uploads/allimg/180722/290_2347529091.jpg',
          type: 'auto'
        })
      }
    }
  },
  data () {
    return {
      player: null,
      videoUrl: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    playVidio () {
    }
  },
  components: {
    // Channel
  }
}
</script>

<style>
@import "../assets/css/DPlayer.min.css";
.watch {
  margin: 56px 0 0 240px;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.watch-wrapper {
  margin-top: 24px;
  display: flex;
  width: 100%;
  max-width: 1280px;
}
.dplaycontainer {
  width: 854px;
  height: 480px;
  background-color: brown;
}
</style>
