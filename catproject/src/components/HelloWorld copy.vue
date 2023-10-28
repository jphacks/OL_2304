<template>

    <div class="paw">
      <h1>
        <img src="https://1.bp.blogspot.com/-M5qxrnCBQVo/UnyF1sAe3iI/AAAAAAAAaVE/u1DFgIXrrl4/s800/nikukyu_cha.png" alt="肉球" >
      </h1>
    </div>

    <div class="loading">
      <div class="circle light"></div>
      <div class="circle dark"></div>
      <div class="branding"></div>
    </div>

    <div class="login">
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="gotoHomePage">Login</button>
        <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="handleRegisterForm">新規登録</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    gotoHomePage() {
      // ここで認証ロジックを実行することもできます。
      // 認証が成功したら、以下のようにMyPageに遷移します。
      this.$router.push({ name: 'HomePage' });
    },
    handleRegisterForm() {
      this.$router.push({ name: 'RegisterForm' });
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
