<template>

  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>

  <div class="uploaded">
    <form method="post">
      <div class="map-container">
        <p1>猫を見つけた場所を選択</p1>
        <img src="https://1.bp.blogspot.com/-M5qxrnCBQVo/UnyF1sAe3iI/AAAAAAAAaVE/u1DFgIXrrl4/s800/nikukyu_cha.png" alt="肉球" style="width: 60px; height: 60px;">
        <center><GoogleMap></GoogleMap></center>
      </div>
      <div class="cat-card">
        <p1>近隣で発見された猫から選ぶ</p1>
        <div class="cat-images">
          <br> <!-- ここで改行を挿入 -->
          <div v-for="image in catImages" :key="image" class="cat-image-container">
            <img :src="image" alt="猫の画像" class="cat-image"/>
          </div>
        </div>
      </div>

      <button type="button" class="gotoUploadNewCat" @click.prevent="gotoUploadNewCat">上記にいない猫を登録する</button>
    </form>
  </div>

</template>


<script>
import GoogleMap from './GmapPost.vue'

export default {
  name: 'CatMap',
  props: {
    msg: String
  },
  data() {
    return {
      catImages: [
        'https://newsatcl-pctr.c.yimg.jp/t/iwiz-yn/rpr/ishiimasumi/00259735/title-1632409672924.jpeg?exp=10800', 
        'https://p.potaufeu.asahi.com/c713-p/picture/26747079/e6388b5c0937642c0e97515110ef835c.jpg',
        'https://www.yhg.co.jp/taiyo33/column/wp/wp-content/uploads/2021/05/cat-4806217_1280-1024x682.jpg',
        'https://stat.ameba.jp/user_images/20230501/19/alma-soulmate/84/57/j/o1080081015278087136.jpg',
        'https://urbanlife.tokyo/wp-content/uploads/2020/11/201128_catcat_01.jpg',
        'https://stat.ameba.jp/user_images/20230413/19/hironepu/86/d6/j/o2048191415269793409.jpg'
        // 他の画像URLをここに追加
      ],
    };
  },
  methods: {
    gotoUploadNewCat() {
      this.$router.push({ name: 'UploadNewCat' });
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
.map-container {
  width: 100%;
}

.cat-card {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: white; /* 背景色を白に設定 */
  position: absolute; /* テキストを絶対位置に配置 */
  top: 900px; /* 上からの位置 */
  left: 10px; /* 左からの位置 */
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
</style>
