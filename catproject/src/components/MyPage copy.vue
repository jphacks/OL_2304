<template>

  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>
  <p>
    ユーザー名：  
  </p>
  <p>
    メールアドレス：
  </p>
  <div class="login">
    <form method="post">
      <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="gotoHomePage">ホームに戻る</button>
      <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoUnSubscribed">退会手続き</button>
      </form>
  </div>
</template>

<script>
export default {
name: 'MyPage',
props: {
  msg: String
},
methods: {
  gotoHomePage() {
    // ここで認証ロジックを実行することもできます。
    // 認証が成功したら、以下のようにMyPageに遷移します。
    this.$router.push({ name: 'HomePage' });
  },
  gotoUnSubscribed() {
    this.$router.push({ name: 'UnSubscribed' });
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
