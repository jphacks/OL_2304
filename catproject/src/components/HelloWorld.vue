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
      <form @submit.prevent="login">
        <input type="text" v-model="email" placeholder="Email" required="required" />
        <input type="password" v-model="password" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Login</button>
      </form>
      <button @click="handleRegisterForm" class="btn btn-primary btn-block btn-large">新規登録</button>
    </div>

    <create></create>


</template>

<script>
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import create from './PostCat.vue'




export default {
  components:{
    create,
  },
  name: 'HelloWorld',
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push({ name: 'HomePage' });
      } catch (error) {
        console.error("Login failed:", error);
        alert("ログインに失敗しました。");
      }
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
