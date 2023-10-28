<template>
  <GMapMap
      :center= "{ lat: 35.6764, lng: 139.6500 }"
      :zoom="13"
      map-type-id="roadmap"
      style="width: 50vw; height: 450px"
  >
  <GMapMarker
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
    />
  </GMapMap>
</template>

<script>
import { searchCat } from '../CatFirebase';
// データベースに登録された猫の画像を地図上に表示する。
const catsdata = await searchCat({});
let markersdata = [];
catsdata.forEach(element => {
  markersdata.push({
    position: {
      lat: parseFloat(element.latitude),
      lng: parseFloat(element.longitude)
    },
    imageURL: element.imageurl
  });
});
export default {
  name: 'GoogleMap',
  data() {
    return {
      markers: markersdata
    };
  },
   methods: {
    goToCatDetailPage() {
      this.$router.push({name:'CatProfile'});
    }
   }
};
</script>

<style>
.cat {
  border-radius: 50%;
}
</style>