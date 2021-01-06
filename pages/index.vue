<template>
  <body>
    <section class="clean-block clean-hero" style="background-image:~/assets/img/tech/image4.jpg;color:rgba(9, 162, 255, 0.85);">
      <div class="text">
        <h2>Celeste 群服</h2>
        <p>
          服务器由Celeste玩家交流群(551960835)所搭建的CelesteNet国内蔚蓝服务器.
        </p>
        <button class="btn btn-outline-light btn-lg" type="button">
          如何进服
        </button>
      </div>
    </section>
  </body>
</template>
<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>

<style>

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
