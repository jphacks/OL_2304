<template>
  <h2>作成</h2>
  <div class="ly_input">
    <div class="ly_input_inner mb-3">
      <label for="fileUpload" class="btn btn-primary">
        <span v-if="!image">{{ '画像を選択' }}</span>
        <span v-else>{{ image.name }}</span>
        <input type="file" id="fileUpload" accept="image/jpeg,image/png,image/gif" @change="uploadFile" class="file-input"/>
      </label>
    </div>
    <button class="btn btn-primary" @click="create">登録</button>
    <button class="btn btn-primary" @click="download">ダウンロード</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { uploadCat, downloadAndLogCat } from '../CatFirebase';

export default defineComponent({
  setup() {
    const image = ref(null);

    const uploadFile = (event) => {
      image.value = event.target.files[0];
    };

    const create = () => {
      if (image.value) {
        uploadCat({
          image: image.value, 
          color: 'red', 
          pattern: 'dot', 
          breed: 'mike',
          AdultOrChild: 'Adult', 
          isEarCut: 'True', 
          hasCollar: 'False', 
          comment: '臆病です。', 
          latitude: '10', 
          longitude: '12', 
          userId: 'testID', 
          isNew: 'True'
        });
      } else {
        alert('画像を選択してください。');
      }
    };
    
    const download = () => {
      downloadAndLogCat();
    };

    return {
      create,
      download,
      uploadFile,
      image
    };
  },
});
</script>

<style scoped>
.ly_input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.ly_input_inner {
  width: 100%;
}

.btn, .file-input {
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  cursor: pointer;
}

.file-input {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
