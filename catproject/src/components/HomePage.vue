<template>  
  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>

  <div class="gotoMyPage">
    <button @click.prevent="gotoMypage">マイページ</button>
  </div>

  <div class="gotoCatProfile">
    <button @click.prevent="gotoCatProfile">猫アイコン予定</button>
  </div>
<div class="content-container">
  <div class="dropdown-section">
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
      <button type="button" class="NarrowButton" @click.prevent="gotoFinishUpload">絞り込み</button>
    <!-- <center>
    <GoogleMap></GoogleMap>
    </center> -->

    <!-- <div>
      <div class="form-group">
        <label for="map-container" class="map-container"></label>
        <GoogleMap></GoogleMap>
      </div>
    </div> -->

      <div class="map-section">
        <div class="form-group">
          <label for="map-container" class="map-container"></label>
          <GoogleMap></GoogleMap>
        </div>
      </div>

    <div class="gotoCatMap">
      <form method="post">
        
        <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="gotoCatMap">投稿</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import GoogleMap from './Gmap.vue'
export default {
name: 'HomePage',
props: {
  msg: String
},
methods: {
  gotoMypage() {
    this.$router.push({ name: 'MyPage' });
  },
  gotoCatMap() {
    this.$router.push({ name: 'CatMap' });
  },
  gotoCatProfile() {
    this.$router.push({ name: 'CatProfile' });
  }
},
components:{
  GoogleMap,
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
.gotoMyPage {
position: absolute; /* マイページボタンを絶対位置指定 */
top: -30px;
right: 10px;
}
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
width: 120px; /* すべてのプルダウンの横幅を揃える */
}
.form-label {
width: 170px; /* ラベルの横幅を一定にして":"の位置を揃える */
text-align: right;
margin-right: 10px;
}

.map-container {
float: right; /* 右寄せ */
width: 60%; /* マップの幅を調整 */
height: 400px; /* マップの高さを調整 */
}
/* プルダウンと地図のコンテナ */
.content-container {
  display: flex;
  justify-content: space-between;
  align-items: start; /* 必要に応じて調整 */
}

.dropdown-section {
  flex: 1; /* 必要に応じて調整 */
  margin-right: 20px; /* プルダウンと地図の間隔を開ける */
}

.map-section {
  flex: 1; /* 必要に応じて調整 */
}
</style>
