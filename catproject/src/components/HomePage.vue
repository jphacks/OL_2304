<template>  
  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>

  <div class="gotoMyPage">
    <button @click.prevent="gotoMypage">マイページ</button>
  </div>

  <div class="home-page">
    <div class="form-wrapper">
    <div class="form-section">
      <h2 class="form-title">表示する猫を絞り込む</h2>
      <form>
        <p>最近発見されたばかり</p>
        <select v-model="isNew">
          <option value="">指定なし</option>
          <option value="True">最近発見されたばかり</option>
        </select>

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
        </form>
        <center>
          <button type="button" class="narrow-button" @click="refreshMap">絞り込み</button>
        </center>
      
    </div>
    </div>
    <div class="map-wrapper">
    <div class="map-section">
      <div class="form-group">
        <label for="map-container" class="map-container"></label>
        <GMapMap
      :center= "{ lat: 35.6764, lng: 139.6500 }"
      :zoom="15"
      map-type-id="roadmap"
      style="width: 50vw; height: 500px"
  >
  <GMapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position= m.position
      :icon= "{
          url: m.imageURL,
          scaledSize: {width: 80, height: 80},
          anchor: {x: 50, y: 50}
      }"
      :clickable="true"
      @click="goToCatDetailPage(m.id)"
      class="cat"
    />
  </GMapMap>
      </div>
    </div></div>
  </div>
  <div class="gotoPostingScreen">
      <form method="post">
        <button type="submit" class="catDiscover" @click.prevent="gotoPostingScreen" style="font-size: 20px;">見つけた猫を投稿</button>
        <img src="https://1.bp.blogspot.com/-M5qxrnCBQVo/UnyF1sAe3iI/AAAAAAAAaVE/u1DFgIXrrl4/s800/nikukyu_cha.png" alt="肉球" style="width: 60px; height: 60px;">
      </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { searchCat } from '../CatFirebase';
export default {
  
  setup() {
    const markers = ref([]);
    const selectedColor = ref('');
    const selectedPattern = ref('');
    const selectedType = ref('');
    const selectedChildAdult = ref('');
    const selectedEarCut = ref('');
    const selectedChoker = ref('');
    const isNew = ref('');
    let catsdata = [];
    let markersdata = [];

    const loadMarkers = async () => {
      catsdata = await searchCat({});
      const markersdata = catsdata.map((element) => {
        return {
          position: {
            lat: parseFloat(element.data.latitude),
            lng: parseFloat(element.data.longitude),
          },
          imageURL: element.data.imageurl,
          id: element.id,
        };
      });
      markers.value = markersdata;
    };

    const refreshMap = async () => {
      catsdata =  await searchCat({
        color: selectedColor.value,
        pattern: selectedPattern.value,
        type: selectedType.value,
        childAdult: selectedChildAdult.value,
        earCut: selectedEarCut.value,
        choker: selectedChoker.value,
        isNew: isNew.value,
      });
      markersdata = catsdata.map((element) => {
        return {
          position: {
            lat: parseFloat(element.data.latitude),
            lng: parseFloat(element.data.longitude),
          },
          imageURL: element.data.imageurl,
          id: element.id,
        };
      });
      markers.value = markersdata;
    };

    onMounted(() => {
      loadMarkers();
    });
    return {
      markers,
      refreshMap,
      selectedColor,
      selectedPattern,
      selectedType,
      selectedChildAdult,
      selectedEarCut,
      selectedChoker,
      isNew,
    };
  },
  name: 'HomePage',
  methods: {
    gotoMypage() {
      this.$router.push({ name: 'MyPage' });
    },
    gotoPostingScreen() {
      this.$router.push({ name: 'PostingScreen' });
    },
    goToCatDetailPage(id) {
      window.selectedCatID = id;
      this.$router.push({ name: 'CatProfile' });
    },
  },
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
  width: 200px;
}
.gotoPostingScreen {/*投稿ボタン*/
width: 300px;
margin-left: 500px;
align-items: center;
position: absolute; /* テキストを絶対位置に配置 */
top: 600px; /* 上からの位置 */
left: 120px; /* 左からの位置 */ 
}
.form-group {
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
.catDiscover {
  width: 80%;
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
  align-items: flex-start;
}
.map-wrapper {
  display: flex;
  flex-direction: column;
}
.form-section {
  margin-right: 20px;
}
.map-title {
  margin-top: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  left: 420px;
}

.map-section {
  display: flex;
  justify-content: center; /* 横方向（水平方向）に中央に配置 */
  align-items: center; /* 縦方向（垂直方向）に中央に配置 */
  position: absolute; /* テキストを絶対位置に配置 */
  top: 200px; /* 上からの位置 */
  left: 400px; /* 左からの位置 */ 
}

/* スタイルを追加または変更 */
.form-section, .map-section {
  margin: 0;
  padding: 0;
}
.map-section {
  margin-top:-100px;
}
/* ブラウザのデフォルトのスタイルをリセット */
body, div, h1, h2, h3, p, form {
  margin: 0;
  padding: 0;
}
select {
  width: 200px;
}
.form-wrapper {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
