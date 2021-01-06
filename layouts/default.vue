<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand logo" href="#">
          CelesteGroupServer
        </NuxtLink><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
          <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon" />
        </button>
        <div
          id="navcol-1"
          class="collapse navbar-collapse"
        >
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link active" href="index.html">
                主页
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" href="features.html">
                群服控制台
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Profile" class="nav-link" href="pricing.html">
                个人资料
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" href="about-us.html">
                服务器状态
              </NuxtLink>
            </li>
            <li class="nav-item">
              <p v-if="!islogin">
                <button class="btn btn-primary border rounded shadow-sm" type="button" style="border-radius: 22px;font-size: 12px;" @click="gologin()">
                  登录
                </button>
              </p>
              <p v-if="islogin">
                欢迎回来,{{ username }}
                <a href="#" @click="logout()">退出登录</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Nuxt />
    <footer class="page-footer dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <h5>快速开始</h5>
            <ul>
              <li><a href="#">开始</a></li>
              <li><a href="#">登陆</a></li>
              <li><a href="#">下载</a></li>
            </ul>
          </div>
          <div class="col-sm-3">
            <h5>关于服务器</h5>
            <ul>
              <li><a href="#">管理团队</a></li>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">加入讨论群</a></li>
            </ul>
          </div>
          <div class="col-sm-3">
            <h5>帮助</h5>
            <ul>
              <li><a href="#">常见问题</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>© 2020 Small_Miao</p>
      </div>
    </footer>
  </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      islogin: false,
      logininfo: null,
      username: '',
      logintext: '登录'
    }
  },
  mounted () {
    if (Cookies.get('logintoken') != null) {
      console.log('auth login token')
      axios.get('/api/auth?cookie=' + Cookies.get('logintoken')).then((response) => {
        console.log(response.data)
        console.log(Cookies.get('logintoken'))
        if (response.data.stats === 'success') {
          this.logininfo = response.data.logininfo
          this.islogin = true
          this.username = response.data.logininfo.username
          Cookies.set('temp', response.data)
          console.log('Islogin')
          Cookies.set('islogin', true)
        } else {
          this.islogin = false
          console.log('Fail')
        }
      })
    } else {
      this.islogin = false
      console.log('NotLogin')
    }
  },
  methods: {
    gologin () {
      this.$router.push({
        path: 'login'
      })
    },
    logout () {
      Cookies.remove('logintoken')
      Cookies.remove('islogin')
      this.islogin = false
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
