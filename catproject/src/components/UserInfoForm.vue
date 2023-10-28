<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label>メールアドレス: {{ email }}</label>
        </div>
        <div>
          <input v-model="userName" placeholder="ユーザー名" required />
        </div>
        <div>
          <input type="file" @change="onFileChange" required />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { doc, setDoc, getFirestore } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  
  export default {
    setup() {
      const db = getFirestore();
      const auth = getAuth();
      const email = ref('');
      const latitude = ref(null);
      const longitude = ref(null);
      const userId = ref('');
      const userName = ref('');
      const catIds = ref('');
      const image = ref(null);
  
      onMounted(() => {
        const user = auth.currentUser;
        if (user) {
          userId.value = user.uid;
          email.value = user.email;
        } else {
          alert('ユーザーがログインしていません。');
        }
      });
  
      const onFileChange = (e) => {
        image.value = e.target.files[0];
      };
  
      const submitForm = async () => {
        try {
          let imageBase64 = '';
          if (image.value) {
            imageBase64 = await new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = (e) => resolve(e.target.result);
              reader.readAsDataURL(image.value);
            });
          }
  
          await setDoc(doc(db, 'users', userId.value), {
            email: email.value,
            latitude: latitude.value,
            longitude: longitude.value,
            userId: userId.value,
            userName: userName.value,
            catIds: catIds.value.split(','),
            icon: imageBase64,
            hasLeft: false,
          });
  
          alert('情報を保存しました。');
        } catch (error) {
          console.error('Error adding document: ', error);
          alert('情報の保存に失敗しました。');
        }
      };
  
      return {
        email,
        latitude,
        longitude,
        userId,
        userName,
        catIds,
        onFileChange,
        submitForm,
      };
    },
  };
  </script>
  