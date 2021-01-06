<template>
  <div class="login-clean">
    <form method="post">
      <h2 class="sr-only">
        Login Form
      </h2>
      <div class="illustration">
        <img src="~/assets/img/loginimg.png" width="80" height="80">
      </div>
      <div class="form-group">
        <input v-model="username" class="form-control" type="text" name="user" placeholder="UserName">
      </div>
      <div class="form-group">
        <input v-model="password" class="form-control" type="password" name="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block" type="button" :disabled="islogin == true" @click="submit()">
          {{ logintext }}
        </button>
      </div><a class="forgot" href="#">Forgot your email or password?</a>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  layout: 'none',
  data () {
    return {
      username: '',
      password: '',
      logintext: '登录',
      islogin: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {
    submit () {
      console.log('Submit')
      this.logintext = '登陆中...'
      this.islogin = true
      axios.get('/api/login?username=' + this.username + '&password=' + this.password).then((response) => {
        if (response.data.stats === 'success') {
          this.$router.push('/')
          Cookies.set('logintoken', response.data.cookie)
        } else {
          this.logintext = '登录失败'
          this.islogin = false
        }
      })
    }
  }
  // page component definitions
}
</script>
