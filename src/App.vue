<template>
  <main>
    <router-view />
    <vue-confirm-dialog></vue-confirm-dialog>
  </main>
</template>
<script>
// import io from 'socket.io-client'
// var socket = io.connect('http://localhost:4000')

export default {
  name: 'App',
  components: {},
  computed: {
  },
  watch: {
  },
  sockets: {
    connect() {
      this.$log.info('connected to socket server')
    },
    newdata(fetchedData) {
      this.$log.warn('fetchedData', fetchedData)
    }
  },
  created() {
    // if (this.user) {
    //   this.$socket.emit('joinRoom', this.user.companyId)
    //   this.$log.info('room join ' + this.user.companyId)
    // }
  }
}
</script>

<style lang="scss">
// @import 'assets/scss/style.scss';

.required label:after {
  content:" *";
  color: red;
}
</style>
