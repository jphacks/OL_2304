<template>  
      <div class="loading">
        <div class="circle light"></div>
        <div class="circle dark"></div>
        <div class="branding"></div>
      </div>
  
      <div class="login-google">
        <button @click="login">ログイン</button>
      </div>

      <div class="create-account">
        <p>
          ー または ー
        </p>
        <form method="post">
          <input type="user-name" name="u" placeholder="ユーザー名" required="required" />
          <input type="mail-address" name="p" placeholder="メールアドレス" required="required" />
          <input type="password" name="p" placeholder="パスワード" required="required" />
          <button type="submit" class="btn btn-primary btn-block btn-large">アカウント作成</button>
        </form>
      </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterForm',
    props: {
      msg: String
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
  