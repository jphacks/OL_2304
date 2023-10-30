<template>

  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>
  <p>
    メールアドレス：{{ email }}
  </p>
  <div class="login">
    <form method="post">
      <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="gotoHomePage">ホームに戻る</button>
      <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoUnSubscribed">退会手続き</button>
      </form>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import { ref, onMounted } from 'vue';

export default {
  setup() {
      const auth = getAuth();
      const email = ref('');
      onMounted(() => {
        const user = auth.currentUser;
        if (user) {
          email.value = user.email;
        } else {
          alert('ユーザーがログインしていません。');
        }
      });
      return {
        email,
      }},
name: 'MyPage',
components: {
},
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
