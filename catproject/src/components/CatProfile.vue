<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="catimage">
          <img :src=imgPath alt="catImg" width="400" style="display: block; margin: 0 auto;"/>
        </div>
        <table>
          <tr>
            <td>色：</td>
            <td>{{color}}</td>
          </tr>
          <tr>
            <td>柄：</td>
            <td>{{pattern}}</td>
          </tr>
          <tr>
            <td>種類：</td>
            <td>{{breed}}</td>
          </tr>
          <tr>
            <td>年齢：</td>
            <td>{{AdultOrChild}}</td>
          </tr>
          <tr>
            <td>耳カット：</td>
            <td>{{isEarCut}}</td>
          </tr>
          <tr>
            <td>首輪：</td>
            <td>{{hasCollar}}</td>
          </tr>
          <tr>
            <td>発見日：</td>
            <td>{{formatDate(postedAt)}}</td>
          </tr>
          <tr>
            <td>コメント：</td>
            <td>{{comment}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="uploaded">
      <form method="post">
        <button type="button" class="gotoHomePage" @click.prevent="gotoHomePage">ホームに戻る</button>
      </form>
    </div>
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
  name: 'CatProfile',
  methods: {
    gotoHomePage() {
      this.$router.push({ name: 'HomePage' });
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


<style scoped>
.card {
  margin: 50px auto;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.card-body {
  padding: 20px;
}
.catimage {
  margin-bottom: 20px;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
}
td {
  padding: 10px;
  border: 1px solid #ccc;
}
.gotoHomePage {
    background: linear-gradient(to bottom, #009EFF 0px, #0075BC 100%) repeat scroll 0 0 transparent;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.55);
    border-radius: 6px 6px 6px 6px;
    box-shadow: 0 1px 0 #E6F5FF inset;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    padding: 10px 25px;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    width: 25%;
    position: absolute; /* テキストを絶対位置に配置 */
    top: 1000px; /* 上からの位置 */
    left: 37%; /* 左からの位置 */ 
}
</style>