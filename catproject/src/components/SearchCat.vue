<template>
  <h2>検索</h2>
  <div class="cat_search">
    <button @click="search">検索</button>{{cat}}
  </div>
</template>
<script>
import { defineComponent,ref } from 'vue'
import { searchCat} from '../CatFirebase'

export default defineComponent({
  setup() {
    const cat =ref()
    const search=()=>{
    searchCat({color:'red', pattern:'dot', breed:'mike', AdultOrChild:'Adult', isEarCut:'True', 
    hasCollar:'False', latitude:'10', longitude:'12', postedAt:'2020-01-01', isNew:'True'}).then((data)=>cat.value=data)
    }
    return{
      cat,
      search
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