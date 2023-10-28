<template>

    <div class="loading">
      <div class="circle light"></div>
      <div class="circle dark"></div>
      <div class="branding"></div>
    </div>

    <div class="uploaded">
      <form method="post">
        <p>
            新規猫
        </p>
        <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoFinishUpload">投稿</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'UploadNewCat',
  props: {
    msg: String
  },
  methods: {
    gotoFinishUpload() {
      this.$router.push({ name: 'FinishUpload' });
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
