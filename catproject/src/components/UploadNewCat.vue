<template>
  <div class="upload-section">
    <form @submit.prevent="submitForm">
      <p1>新規猫登録</p1>
      <div>
        <h1>画像のアップロード</h1>
        <div class="upload-box">
      <input type="file" @change="handleFileUpload" accept="image/*" ref="fileInput" />
      <img v-if="uploadedImage" :src="uploadedImage" width="200"/>
    </div>
      </div>


    <p2>各項目を選択してください</p2>
      <!-- 猫の色 -->
      <div class="form-group">
        <label for="catColor" class="form-label">色: </label>
        <select id="catColor" v-model="selectedColor" class="custom-dropdown">
          <option value="">選択してください</option>
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
          <option value="">選択してください</option>
          <option value="無地">無地</option>
          <option value="縦縞">縦縞</option>
          <option value="横縞">横縞</option>
          <option value="斑点">斑点</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <!-- 種類の選択 -->
      <div class="form-group">
        <label for="catBreed" class="form-label">種類: </label>
        <select id="catBreed" v-model="selectedBreed" class="custom-dropdown">
          <option value="">選択してください</option>
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
        <label for="catAge" class="form-label">子猫/成猫: </label>
        <select id="catAge" v-model="selectedChildAdult" class="custom-dropdown">
          <option value="">選択してください</option>
          <option value="子猫">子猫</option>
          <option value="成猫">成猫</option>
          <option value="分からない">分からない</option>
        </select>
      </div>
      <!-- 耳カットの選択 -->
      <div class="form-group">
        <label for="catEarCut" class="form-label">耳カット: </label>
        <select id="catEarCut" v-model="selectedEarCut" class="custom-dropdown">
          <option value="">選択してください</option>
          <option value="あり">あり</option>
          <option value="なし">なし</option>
          <option value="分からない">分からない</option>
        </select>
      </div>
      <!-- 首輪 -->
      <div class="form-group">
        <label for="catCollar" class="form-label">首輪: </label>
        <select id="catCollar" v-model="selectedCollar" class="custom-dropdown">
          <option value="">選択してください</option>
          <option value="あり">あり</option>
          <option value="なし">なし</option>
          <option value="分からない">分からない</option>
        </select>
      </div>
      <div class="comment-box">
        <h2>コメントを追加</h2>
        <textarea v-model="comment" placeholder="コメントを入力してください" style="width: 300px; height: 100px; resize: none;"></textarea>
        <div class="comments">
          <div v-for="(c, index) in comments" :key="index" class="comment">
           {{ c }}
          </div>
        </div>
      </div>
      <p v-if="errorMessage" class="error-message" style="color: red">{{ errorMessage }}</p>
      <button type="button" class="submitButton" @click.prevent="submitForm" >投稿</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { uploadCat } from '../CatFirebase.js'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
<<<<<<< HEAD

import { db } from '@/firebase'


=======
>>>>>>> 9405d386b1e43508097a795d00d319e350422a82
export default {
  name: 'UploadNewCat',
  methods: {
    },
    mounted() {
      console.log(window.kuwagloballat)
      console.log(window.kuwagloballongi)
    },
  setup() {
    const router = useRouter()
    const uploadedImage = ref(null)
    const image = ref(null)
    const selectedColor = ref('')
    const selectedPattern = ref('')
    const selectedBreed = ref('')
    const selectedChildAdult = ref('')
    const selectedEarCut = ref('')
    const selectedCollar = ref('')
    const comment = ref('')
    const latitude = ref(window.kuwagloballat)
    const longitude = ref(window.kuwagloballongi)
    const errorMessage = ref('')

    const handleFileUpload = (event) => {
      image.value = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        uploadedImage.value = e.target.result
      }
      reader.readAsDataURL(image.value)
    }

    const gotoFinishUpload = () => {
      router.push({ name: 'FinishUpload' })
    }


    const submitForm = async () => {
      if (!image.value || !selectedColor.value || !selectedPattern.value || !selectedBreed.value || !selectedChildAdult.value || !selectedEarCut.value || !selectedCollar.value) {
        errorMessage.value = '未入力の項目があります'
        return
      }
      uploadCat({
        image: image.value,
        color: selectedColor.value,
        pattern: selectedPattern.value,
        breed: selectedBreed.value,
        AdultOrChild: selectedChildAdult.value,
        isEarCut: selectedEarCut.value,
        hasCollar: selectedCollar.value,
        comment: comment.value,
        latitude: latitude.value,
        longitude: longitude.value,
<<<<<<< HEAD
        //userId: 'testID',//TODO
=======
>>>>>>> 9405d386b1e43508097a795d00d319e350422a82
        userId: auth.currentUser.uid,
        isNew: 'True'
      })

      console.log("猫の緯度",latitude.value)
      console.log("猫の経度",longitude.value)


      //firebaseのfirestoreから全usersの情報を取得

      // 全ユーザーの緯度と経度をFirebaseから取得
      try {
        const usersRef = db.collection('users');
        const snapshot = await usersRef.get();
        const userLocations = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.latitude && data.longitude) {
            userLocations.push({ id: doc.id, latitude: data.latitude, longitude: data.longitude });
          }
        });

        // ここで取得したユーザーの位置情報を使って何か処理を行う
        console.log('全ユーザーの緯度と経度:', userLocations);
      } catch (error) {
        console.error('ユーザーの位置情報の取得に失敗しました:', error);
      }








      gotoFinishUpload()
    }
        return {
      image,
      uploadedImage,
      selectedColor,
      selectedPattern,
      selectedBreed,
      selectedChildAdult,
      selectedEarCut,
      selectedCollar,
      comment,
      latitude,
      longitude,
      handleFileUpload,
      submitForm,
      comments: [],
      errorMessage
    }
  }
}
</script>

<style scoped>
.form-group {
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