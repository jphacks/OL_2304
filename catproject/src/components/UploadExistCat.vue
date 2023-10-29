<template>
  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>

  <div class="upload-section">
    <h1>画像のアップロード</h1>
    <div class="upload-box">
      <input type="file" @change="handleFileUpload" accept="image/*" />
    </div>

    <table>
      <tr>
        <td>色：</td>
        <td>{{ color }}</td>
      </tr>
      <tr>
        <td>柄：</td>
        <td>{{ pattern }}</td>
      </tr>
      <tr>
        <td>種類：</td>
        <td>{{ breed }}</td>
      </tr>
      <tr>
        <td>年齢：</td>
        <td>{{ AdultOrChild }}</td>
      </tr>
      <tr>
        <td>耳カット：</td>
        <td>{{ isEarCut }}</td>
      </tr>
      <tr>
        <td>首輪：</td>
        <td>{{ hasCollar }}</td>
      </tr>
      <tr>
        <td>発見日：</td>
        <td>{{ formatDate(postedAt) }}</td>
      </tr>
      <tr>
        <td>コメント：</td>
        <td>{{ comment }}</td>
      </tr>
    </table>
  </div>
  <br><br>

  <div class="uploaded">
    <form method="post">
      <button type="button" class="submitButton" @click.prevent="gotoFinishUpload">送信</button>
    </form>
  </div>
</template>

<script>

import { firebaseApp } from '../firebase';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { onMounted, ref } from 'vue';

export default {

  setup() {
    const docRef = doc(getFirestore(firebaseApp), "TestCat", window.selectedCatID);
    const url = ref('');
    const color = ref('');
    const pattern = ref('');
    const breed = ref('');
    const age = ref('');
    const isEarCut = ref('');
    const hasCollar = ref('');
    const isNew = ref('');
    const postedAt = ref('');
    const comment = ref('');

    onMounted(async () => {
      const docSnap = await getDoc(docRef);
      url.value = docSnap.data().imageurl;
      color.value = docSnap.data().color;
      pattern.value = docSnap.data().pattern;
      breed.value = docSnap.data().breed;
      age.value = docSnap.data().AdultOrChild;
      isEarCut.value = docSnap.data().isEarCut;
      hasCollar.value = docSnap.data().hasCollar;
      isNew.value = docSnap.data().isNew;
      postedAt.value = docSnap.data().postedAt;
      comment.value = docSnap.data().comment;
    });

    return {
      imgPath: url,
      color,
      pattern,
      breed,
      age,
      isEarCut,
      hasCollar,
      isNew,
      postedAt,
      comment,
    };

  },

  name: 'UploadExist',
  props: {
    msg: String
  },
  methods: {
    gotoFinishUpload() {
      this.$router.push({ name: 'FinishUpload' });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp.seconds * 1000);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const seconds = ('0' + date.getSeconds()).slice(-2);
      return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    },
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

.upload-box {
  border: 5px dashed #ccc;
  /* ボックスの境界線を設定 */
  padding: 40px;
  /* ボックスの内部余白を設定 */
  text-align: center;
  /* テキストを中央揃えにする */
  background-color: #f9f9f9;
  /* ボックスの背景色を設定 */
  cursor: pointer;
  /* カーソルをポインタに変更 */
  width: 600px;
}

.upload-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  /* 画面の高さいっぱいに表示 */
}

table {
  font-size: larger;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #fff;
  border: 3px dashed gray;
}

th, td{
  border: 1px solid black;
}

.submitButton {
  background: linear-gradient(to bottom, #009EFF 0px, #0075BC 100%) repeat scroll 0 0 transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.55);
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 1px 0 #E6F5FF inset;
  color: #FFFFFF;
  cursor: pointer;
  display: block;
  margin:  auto;
  margin-top: 100px;
  padding: 10px 25px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  width: 25%;
}</style>