<template>
  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>
  <p>猫情報掲載予定</p>
  <p>色：</p>
  <p>柄：</p>
  <p>種類：</p>
  <p>成猫</p>
  <p>色耳カットなし</p>
  <p>首輪なし</p>
  <div class="catimage">
    <h1>
      <img :src="imgPath" alt="catImg" style="display: block; margin-left: 0; margin-right: auto;"/>
    </h1>
  </div>
  <div class="uploaded">
    <form method="post">
      <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoHomePage">ホームに戻る</button>
    </form>
  </div>
</template>

<script>
import catImage from "../assets/cat1-1.jpg";
export default {
name: 'CatProfile',
data() {
  return {
    
    imgPath: catImage

  }
},
props: {
  msg: String
},
methods: {
  gotoHomePage() {
    this.$router.push({ name: 'HomePage' });
  }
}
}
</script>

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
color: #42B983;
}
</style>