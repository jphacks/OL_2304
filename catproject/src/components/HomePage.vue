<template>
  <v-app>
    <v-main>
      <v-container class="ma-5">
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn text color="primary" @click="gotoMypage">マイページ</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title>表示する猫を絞り込む</v-card-title>
              <v-card-text>
                <v-form>
                  <!-- 猫の色 -->
                  <v-select
                    v-model="selectedColor"
                    :items="colors"
                    label="猫の色"
                    dense
                  ></v-select>
                  <!-- 猫の柄 -->
                  <v-select
                    v-model="selectedPattern"
                    :items="patterns"
                    label="猫の柄"
                    dense
                  ></v-select>
                  <!-- 猫の種類 -->
                  <v-select
                    v-model="selectedType"
                    :items="types"
                    label="猫の種類"
                    dense
                  ></v-select>
                  <!-- 猫の年齢 -->
                  <v-select
                    v-model="selectedChildAdult"
                    :items="ages"
                    label="猫の年齢"
                    dense
                  ></v-select>
                  <!-- 耳のカット -->
                  <v-select
                    v-model="selectedEarCut"
                    :items="earCuts"
                    label="耳のカット"
                    dense
                  ></v-select>
                  <!-- 首輪 -->
                  <v-select
                    v-model="selectedChoker"
                    :items="chokers"
                    label="首輪"
                    dense
                  ></v-select>
                  <!-- 新規かどうか -->
                  <v-select
                    v-model="isNew"
                    :items="isNewOptions"
                    label="最近発見されたばかり"
                    dense
                  ></v-select>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="refreshMap">絞り込み</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="8" lg="9">
              <v-card-text>
                <!-- ここにマップコンポーネントを挿入 -->
                <GMapMap
                    :center= "{ lat: 35.6764, lng: 139.6500 }"
                    :zoom="13"
                    map-type-id="roadmap"
                    style="width: 50vw; height: 450px"
                ><GMapMarker
                  v-for="(m, index) in markers"
                  :key="index"
                  :position= m.position
                  :icon= "{
                      url: m.imageURL,
                      scaledSize: {width: 100, height: 100},
                      anchor: {x: 50, y: 50}
                  }"
                  :clickable="true"
                  @click="goToCatDetailPage()"
                  class="cat"
                /></GMapMap>
              </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn color="primary" @click="gotoCatMap">猫を投稿</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
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
      try {
        catsdata = await searchCat({});
        if (!Array.isArray(catsdata)) {
          console.error('Expected catsdata to be an array, but got:', catsdata);
          return;
        }

        const markersdata = catsdata.map((element) => {
          // element.dataが存在し、正しいプロパティを持っていることを確認
          if (!element.data || typeof element.data.latitude !== 'string' || typeof element.data.longitude !== 'string') {
            console.error('Invalid element data:', element);
            return null;
          }

          return {
            position: {
              lat: parseFloat(element.data.latitude),
              lng: parseFloat(element.data.longitude),
            },
            imageURL: element.data.imageurl,
            id: element.id,
          };
        }).filter(Boolean); // nullをフィルタリングして除去

        markers.value = markersdata;
      } catch (error) {
        console.error('Error loading markers:', error);
      }
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


    const colors = ['白', '黒', '茶', '灰', '赤', '橙', 'その他'];
    const patterns = ['無地', '縦縞', '横縞', '斑点', 'その他'];
    const types = ['三毛', '鯖', 'マンチカン', 'アメリカンショートヘアー', 'スコティッシュフォールド', 'ラグドール', 'ブリティッシュショートヘア', 'その他'];
    const ages = ['子猫', '成猫'];
    const earCuts = ['あり', 'なし'];
    const chokers = ['あり', 'なし'];
    const isNewOptions = ['指定なし', '最近発見されたばかり'];

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
      colors,
      patterns,
      types,
      ages,
      earCuts,
      chokers,
      isNewOptions,
    };
  },
  name: 'HomePage',
  methods: {
    gotoMypage() {
      this.$router.push({ name: 'MyPage' });
    },
    gotoCatMap() {
      this.$router.push({ name: 'CatMap' });
    },
    goToCatDetailPage(id) {
      window.selectedCatID = id;
      this.$router.push({ name: 'CatProfile' });
    },
  },
}//q:なぜv-modelが更新されないの
//a:https://qiita.com/ryo2132/items/1b0b2b0e2e2e2e2e2e2e
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
top: 600px; /* 上からの位置 */
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
  /* flex-grow: 1; */
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
