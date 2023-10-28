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
    </div>

    <div class="uploaded">
      <form method="post">
        <button type="button" class="submitButton" @click.prevent="gotoFinishUpload">送信</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'UploadExist',
  props: {
    msg: String
  },
  methods: {
    gotoFinishUpload() {
      this.$router.push({ name: 'FinishUpload' });
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
.upload-box {
  border: 5px dashed #ccc; /* ボックスの境界線を設定 */
  padding: 40px; /* ボックスの内部余白を設定 */
  text-align: center; /* テキストを中央揃えにする */
  background-color: #f9f9f9; /* ボックスの背景色を設定 */
  cursor: pointer; /* カーソルをポインタに変更 */
  width: 600px;
}
.upload-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh; /* 画面の高さいっぱいに表示 */
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
    margin: 0 auto;
    margin-top: 50px;
    padding: 10px 25px;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    width: 25%;
}
</style>