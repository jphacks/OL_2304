<template>
  <div class="upload-section">
    <form @submit.prevent="submitForm">
      <p1>新規猫登録</p1>
      <!-- 画像アップロード部分 -->
      <!-- <div class="image-upload">
        <label for="catImage">
          <img src="./assets/cat1-1.jpg" alt="Upload Image" />
        </label>
        <input type="file" id="catImage" ref="fileInput" @change="previewImage">
      </div> -->
      <div>
        <h1>画像のアップロード</h1>
        <div class="upload-box">
          <input type="file" @change="handleFileUpload" accept="image/*" />
        </div>
      </div>


    <p2>各項目を選択してください</p2>
      <!-- 猫の色 -->
      <div class="form-group">
        <label for="catColor" class="form-label">色: </label>
        <select id="catColor" v-model="selectedColor" class="custom-dropdown">
          <option value="白">白</option>
          <option value="黒">黒</option>
          <option value="茶">茶</option>
          <option value="灰">灰</option>
          <option value="赤">赤</option>
          <option value="橙">橙</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <!-- 猫の柄選択 -->
      <div class="form-group">
        <label for="catPattern" class="form-label">柄: </label>
        <select id="catPattern" v-model="selectedPattern" class="custom-dropdown">
          <option value="無地">無地</option>
          <option value="縦縞">縦縞</option>
          <option value="横縞">横縞</option>
          <option value="斑点">斑点</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <!-- 種類の選択 -->
      <div class="form-group">
        <label for="catType" class="form-label">種類: </label>
        <select id="catType" v-model="selectedType" class="custom-dropdown">
          <option value="三毛">三毛</option>
          <option value="鯖">鯖</option>
          <option value="マンチカン">マンチカン</option>
          <option value="アメリカンショートヘアー">アメリカンショートヘアー</option>
          <option value="スコティッシュフォールド">スコティッシュフォールド</option>
          <option value="ラグドール">ラグドール</option>
          <option value="ブリティッシュショートヘア">ブリティッシュショートヘア</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <!-- 子・大人の選択 -->
      <div class="form-group">
        <label for="catChildAdult" class="form-label">子猫/成猫: </label>
        <select id="catChildAdult" v-model="selectedChildAdult" class="custom-dropdown">
          <option value="子猫">子猫</option>
          <option value="成猫">成猫</option>
          <option value="分からない">分からない</option>
        </select>
      </div>
      <!-- 耳カットの選択 -->
      <div class="form-group">
        <label for="catChoker" class="form-label">耳カット: </label>
        <select id="catEarCut" v-model="selectedEarCut" class="custom-dropdown">
          <option value="あり">あり</option>
          <option value="なし">なし</option>
          <option value="分からない">分からない</option>
        </select>
      </div>
      <!-- 首輪 -->
      <div class="form-group">
        <label for="catChoker" class="form-label">首輪: </label>
        <select id="catChoker" v-model="selectedcatChoker" class="custom-dropdown">
          <option value="あり">あり</option>
          <option value="なし">なし</option>
          <option value="分からない">分からない</option>
        </select>
      </div>
      <div class="comment-box">
        <h2>コメントを追加</h2>
        <textarea v-model="comment" placeholder="コメントを入力してください" style="width: 300px; height: 100px;"></textarea>
        <div class="comments">
          <div v-for="(c, index) in comments" :key="index" class="comment">
           {{ c }}
          </div>
        </div>
      </div>
      <!-- <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoFinishUpload">投稿</button>     -->
      <button type="button" class="submitButton" @click.prevent="gotoFinishUpload">投稿</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedType: '',
      selectedColor: '',
      uploadedImage: '',
      selectedOption: '',
      comment: '',
      comments: [] // プルダウンの初期値
    }
  },
  methods: {
    submitForm() {
      console.log("Form Submitted!");
      // ここでデータをAPIやバックエンドに送信する処理を記述
    },
    previewImage() {
      const fileInput = this.$refs.fileInput;
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
      }
    },
    gotoFinishUpload() {
      this.$router.push({ name: 'FinishUpload' });
    },
    addComment() {
      // コメントを追加するメソッド
      if (this.comment) {
        this.comments.push(this.comment);
        this.comment = '';
        }
      }
    }
}
</script>

<style scoped>
/* スタイルの定義はこちら */
.form-group {
  /* margin-bottom: 20px;
  display: flex;
  align-items: center; */
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.custom-dropdown {
  text-align: left;
  width: 220px; /* すべてのプルダウンの横幅を揃える */
}
.form-label {
  width: 170px; /* ラベルの横幅を一定にして":"の位置を揃える */
  text-align: right;
  margin-right: 10px;
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
.image-upload img {
  width: 200px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
}
.image-upload input[type="file"] {
  display: none;
}
select {
  text-align: center;
  margin-left: 10px;
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
  height: 80vh; /* 画面の高さいっぱいに表示 */
}
.p1 {
  margin: 40px 10 0;
}
.p2 {
  margin: 40px 10 0;
  margin-top: 100px;
}
.comments {
  margin-top: 20px;
}

.comment {
  background-color: #f9f9f9;
  padding: 100px;
  margin-bottom: 10px;
}
.comment-box textarea {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>