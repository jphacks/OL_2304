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
  <div class="home-page">
    <div class="form-section">
      <form>
        <p>猫の色</p>
        <select v-model="selectedColor">
          <option value="">指定なし</option>
          <option value="白">白</option>
          <option value="黒">黒</option>
          <option value="茶">茶</option>
          <option value="灰">灰</option>
          <option value="赤">赤</option>
          <option value="橙">橙</option>
          <option value="その他">その他</option>
        </select>

        <p>猫の柄</p>
        <select v-model="selectedPattern">
          <option value="">指定なし</option>
          <option value="無地">無地</option>
          <option value="縦縞">縦縞</option>
          <option value="横縞">横縞</option>
          <option value="斑点">斑点</option>
          <option value="その他">その他</option>
        </select>

        <p>猫の種類</p>
        <select v-model="selectedType">
          <option value="">指定なし</option>
          <option value="三毛">三毛</option>
          <option value="鯖">鯖</option>
          <option value="マンチカン">マンチカン</option>
          <option value="アメリカンショートヘアー">アメリカンショートヘアー</option>
          <option value="スコティッシュフォールド">スコティッシュフォールド</option>
          <option value="ラグドール">ラグドール</option>
          <option value="ブリティッシュショートヘア">ブリティッシュショートヘア</option>
          <option value="その他">その他</option>
        </select>

        <p>猫の年齢</p>
        <select v-model="selectedChildAdult">
          <option value="">指定なし</option>
          <option value="子猫">子猫</option>
          <option value="成猫">成猫</option>
        </select>

        <p>耳のカット</p>
        <select v-model="selectedEarCut">
          <option value="">指定なし</option>
          <option value="あり">あり</option>
          <option value="なし">なし</option>
        </select>

        <p>首輪</p>
        <select v-model="selectedChoker">
          <option value="">指定なし</option>
          <option value="あり">あり</option>
          <option value="なし">なし</option>
        </select>
        <p>選択した値: {{ selectedType }}</p>

        <center>
          <button type="button" class="narrow-button">絞り込み</button>
        </center>
      </form>
    </div>

    <div class="map-section">
      <div class="form-group">
        <label for="map-container" class="map-container"></label>
        <GoogleMap></GoogleMap>
      </div>
    </div>

    <!-- <center>
    <GoogleMap></GoogleMap>
    </center> -->

    <!-- <div>
      <div class="form-group">
        <label for="map-container" class="map-container"></label>
        <GoogleMap></GoogleMap>
      </div>
    </div> -->
  </div>
  <div class="gotoCatMap">
      <form method="post">
        
        <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="gotoCatMap">投稿</button>
      </form>
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
  },
  data() {
    return {
      selectedValue: '' // 選択した値を保持するデータプロパティ
    };
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

.gotoCatProfile {
width: 120px;
display: flex;
align-items: center;
}
.gotoMyPage {
  position: absolute;
  top: -30px;
  right: 0px;
  /*margin-left: 900px;*/
  width: 200px;
}
.gotoCatMap {/*投稿ボタン*/
width: 300px;
margin-left: 500px;
align-items: center;
position: absolute; /* テキストを絶対位置に配置 */
top: 800px; /* 上からの位置 */
left: 120px; /* 左からの位置 */ 
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
  display: flex;
}
.home-page {
  display: flex;
  flex-direction: row;
}

.form-section {
  margin-right: 20px;
}

.map-section {
  /* flex-grow: 1; */
  display: flex;
  justify-content: center; /* 横方向（水平方向）に中央に配置 */
  align-items: center; /* 縦方向（垂直方向）に中央に配置 */
  position: absolute; /* テキストを絶対位置に配置 */
  top: 240px; /* 上からの位置 */
  left: 400px; /* 左からの位置 */ 
}

/* スタイルを追加または変更 */
.form-section, .map-section {
  margin: 0;
  padding: 0;
}

/* ブラウザのデフォルトのスタイルをリセット */
body, div, h1, h2, h3, p, form {
  margin: 0;
  padding: 0;
}
select {
  width: 200px;
}
</style>
