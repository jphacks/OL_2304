<template>
<!-- 
  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div> -->

  <div class="uploaded">
    <form method="post">
      <div class="map-container">
        <p1>猫を見つけた場所を選択</p1>
        <img src="https://1.bp.blogspot.com/-M5qxrnCBQVo/UnyF1sAe3iI/AAAAAAAAaVE/u1DFgIXrrl4/s800/nikukyu_cha.png" alt="肉球" style="width: 60px; height: 60px;">
        <center>
          <GMapMap
            :center= "{ lat: 35.6764, lng: 139.6500 }"
            :zoom="13"
            map-type-id="roadmap"
            style="width: 50vw; height: 450px"  
            @click="getSelectedPosition"
          >
        <GMapMarker
          :position="selectedPosition"
          :clickable="false"
          :draggable="false"
        :animation="animation"
        ></GMapMarker>
      </GMapMap>
        </center>
      </div>
      <div class="text-container">
        <p2 style="text-align: center; font-size: 28px;">近隣で発見された猫から選ぶ</p2>
      </div>
      <div class="cat-card">
        <!-- <p2 style="text-align: center;">近隣で発見された猫から選ぶ</p2> -->
        <div class="cat-images">
          <br>
          <div v-for= "(m, index) in catImages" :key="index"  class="cat-image-container">
            <img :src="m.url" alt="猫の画像" class="cat-image" @click.prevent="gotoUploadExistCat(m.id)"/>
          </div>
        </div>
      </div>

      <button type="button" class="gotoUploadNewCat-center-button" @click.prevent="gotoUploadNewCat">上記にいない猫を登録する</button>
    </form>
  </div>

</template>


<script>
import { getDocs } from 'firebase/firestore';
// import { downloadCatsNearLocation } from '../CatFirebase.js'
import { getFirestore, collection } from 'firebase/firestore';

const db = getFirestore();
const collectionRef = collection(db, 'TestCat');

export default {
  name: 'CatMap',
  props: {
    msg: String
  },

  data() {
    return {
      catImages: [
      ],
      lat: 35.6764,
      lng: 139.6500,
      selectedPosition: null,
      animation: null,
    };

  },

  methods: {

    gotoUploadExistCat(id) {
      window.selectedCatID = id
      this.$router.push({ name: 'UploadExistCat' });
      
    },

    gotoUploadNewCat() {
      this.$router.push({ name: 'UploadNewCat' });
    },

    getSelectedPosition (event) {
      this.selectedPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      console.log(this.lat)
      console.log(this.lng)
      this.animation = 1;

      window.kuwagloballat = this.lat
      window.kuwagloballongi = this.lng

      this.loadNearbyCats(this.lat, this.lng)

    },

    calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371; // Radius of the Earth in km
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      return d; // returns distance in km
    },

    async loadNearbyCats(lat, lng) {
      const allCats = await this.fetchData();
      this.catImages = allCats
        .filter(cat => this.calculateDistance(lat, lng, cat.latitude, cat.longitude) <= 1)
        .map(cat => ({url:cat.imageurl, id:cat.id}));
      console.log(this.catImages);
    }, 

    async fetchData() {
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map(doc => {
        const docData = doc.data();
        return {
            ...docData,
            latitude: parseFloat(docData.latitude),
            longitude: parseFloat(docData.longitude),
            id: doc.id
        };
      });
      return data; // 返り値を追加
    }
  },

  mounted() {
    this.fetchData();
  },
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
.map-container {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
}
.cat-card {
  margin-top: 20px;
  padding: 20px;
  border: 0px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: white; /* 背景色を白に設定 */
  /* margin-bottom: 20px;
  display: flex;
  align-items: center; */
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.gotoUploadNewCat-center-button {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 20%;
}

.cat-images {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 画像同士の間隔 */
}

.cat-image-container {
  flex: 0 0 calc(16.666% - 20px); /* 画像を6列に分けるための設定。20pxはgapの値です */
}
.cat-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.uploaded p1{
  font-size: 40px;
  text-align: center;
}
.gotoUploadNewCat {
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
    width: 20%;
    position: absolute; /* テキストを絶対位置に配置 */
    top: 1400px; /* 上からの位置 */
    left: 560px; /* 左からの位置 */ 
    width: 450px; /* 幅を調整 */
    height: 100px; /* 高さを調整 */
    font-size: 30px; /* フォントサイズを調整 */
}

.text-container {
  text-align: center;
  border: 1px solid #ccc; /* ボーダーを追加する場合 */
  padding: 5px; /* 必要に応じて余白を追加 */
  background-color: #f9f9f9; /* 背景色を設定 */;
  margin-bottom: -25px;
}

</style>
