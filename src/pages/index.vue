<template>
  <div class="root">
    <div class="wrapper">
        <channel></channel>
        <channel></channel>
        <channel></channel>
        <channel @click="playVidio"></channel>
    </div>
  </div>
</template>

<script>
import Channel from '../components/channel/channel'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    playVidio () {
      console.log('playVideo')
    }
  },
  components: {
    Channel
  }
}
</script>

<style scoped>
.root {
  margin: 56px 0 0 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  overflow:auto;
  display: flex;
  flex-direction: column;
  width: 1284px;
}
</style>
