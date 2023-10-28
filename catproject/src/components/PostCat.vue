<template>
  <h2>作成</h2>
  <div class="ly_input">
    <div class="ly_input_inner">
      画像:<input type="file" accept="image/jpeg,image/png,image/gif" @change="uploadFile">  
    </div>
    <button @click="create">登録</button>

    <button @click="download"> ダウンロード</button>
  </div>

</template>
<script>
import { defineComponent,ref } from 'vue'
import { uploadCat} from '../CatFirebase'
import { downloadAndLogCat} from '../CatFirebase'

export default defineComponent({
  setup() {
    const image =ref()

    const uploadFile = (event)=>{
      image.value = event.target.files[0]
    }
    const create=()=>{
      uploadCat({image:image.value, color:'red', pattern:'dot', breed:'mike', 
      AdultOrChild:'Adult', isEarCut:'True', hasCollar:'False', comment:'臆病です。', 
      latitude:'10', longitude:'12', userId:'testID', isNew:'True'})}
    
    const download=()=>{
      //CatFirebase.jsのdownloadAndLogCatを実行したい
      downloadAndLogCat()
    }


    return{
      create,
      download,
      uploadFile,
      image
    }
  },
})
</script>