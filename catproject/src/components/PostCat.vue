<template>
  <h2>作成</h2>
  <div class="ly_input">
    <div class="ly_input_inner">
      画像:<input type="file" accept="image/jpeg,image/png,image/gif" @change="uploadFile">  
    </div>
    <button @click="create">登録</button>
  </div>
</template>
<script>
import { defineComponent,ref } from 'vue'
import { uploadCat} from '../CatFirebase'

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
    
    return{
      create,
      uploadFile,
      image
    }
  },
})
</script>
<style lang="scss">
h2{
  border-left:10px solid blue;
  padding-left:5px; ;
}

.ly_input{
  padding:10px;
  max-width: 900px;
  margin:auto;
}
.ly_input_inner{
  margin:10px;
}
</style>