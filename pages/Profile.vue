<template>
  <body>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <section class="clean-block about-us">
      <div id="profile" class="container profile profile-view">
        <form>
          <div class="form-row profile-row">
            <div class="col-md-4 relative">
              <div class="avatar">
                <div class="avatar-bg center" />
                <img :src="avater">
              </div><input type="file" class="form-control" name="avatar-file">
            </div>
            <div class="col-md-8">
              <h1>Profile </h1>
              <hr>
              <div class="form-group">
                <label>UserName</label><input class="form-control" type="email" autocomplete="off" required="" name="email">
              </div>
              <div class="form-row">
                <div class="col-sm-12 col-md-6">
                  <div class="form-group">
                    <label>Password </label><input class="form-control" type="password" name="password" autocomplete="off" required="">
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="form-group">
                    <label>Confirm Password</label><input class="form-control" type="password" name="confirmpass" autocomplete="off" required="">
                  </div>
                </div>
              </div>
              <hr>
              <div class="form-row">
                <div class="col-md-12 content-right">
                  <button class="btn btn-primary form-btn" type="submit">
                    SAVE
                  </button><button class="btn btn-danger form-btn" type="reset">
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </body>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  data () {
    const info = Cookie.get('temp')
    const js = JSON.parse(info)
    return {
      username: '',
      avater: 'D:\\avater\\' + js.logininfo.username + '.png'
    }
  },
  mounted () {
    if (Cookie.get('islogin')) {
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
