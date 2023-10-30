<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="circle light"></div>
      <div class="circle dark"></div>
      <div class="branding"></div>
    </div>

    <div class="create-account">
      <p>ー アカウント作成 ー</p>
      <form @submit.prevent="createAccount">
        <input v-model="username" type="text" placeholder="ユーザー名" required />
        <input v-model="email" type="email" placeholder="メールアドレス" required />
        <input v-model="password" type="password" placeholder="パスワード" required />
        <button type="submit" class="btn btn-primary btn-block btn-large">アカウント作成</button>
      </form>
    </div>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default {
  name: 'RegisterForm',
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const error = ref(null);

    const createAccount = async () => {
      loading.value = true;
      error.value = null;
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        await updateProfile(userCredential.user, { displayName: username.value });

        //firestoreにユーザーidノードとその直下にメールアドレスとユーザーネームを保存した
        const db = getFirestore();
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email: email.value,
          username: username.value,
          userId: userCredential.user.uid,
        });


        router.push({ name: 'HomePage' });
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      username,
      email,
      password,
      error,
      createAccount,
    };
  },
};
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