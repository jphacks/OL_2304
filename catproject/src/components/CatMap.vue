<template>

  <div class="loading">
    <div class="circle light"></div>
    <div class="circle dark"></div>
    <div class="branding"></div>
  </div>

  <div class="uploaded">
    <form method="post">
      <div class="map-container">
        <center><GoogleMap></GoogleMap></center>
      </div>

      <div class="cat-card">
        <div class="cat-images">
          <div v-for="image in catImages" :key="image" class="cat-image-container">
            <img :src="image" alt="猫の画像" class="cat-image"/>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoUploadExistCat">既存猫</button>
      <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoUploadNewCat">新規猫</button>
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
      ]
    };
  },
  methods: {
    gotoUploadExistCat() {
      this.$router.push({ name: 'UploadExistCat' });
    },
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

</style>
