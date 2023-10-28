<template>

    <div class="loading">
      <div class="circle light"></div>
      <div class="circle dark"></div>
      <div class="branding"></div>
    </div>

    <div class="uploaded">
      <form method="post">
        <p>
            アップロード完了
        </p>
        <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="handlebacktohome">ホーム画面に戻る</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'FinishUpload',
  props: {
    msg: String
  },
  methods: {
    handlebacktohome() {
      this.$router.push({ name: 'HomePage' });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
