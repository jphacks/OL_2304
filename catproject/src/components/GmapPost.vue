<template>
  <GMapMap
      :center= "{ lat: 35.6764, lng: 139.6500 }"
      :zoom="13"
      map-type-id="roadmap"
      style="width: 50vw; height: 450px"  
      @load="getLocation"
      @click="getSelectedPosition"
  >
  </GMapMap>
  latitude: {{lat}}<br>
  longitude: {{lng}}
</template>

<script>
//import { applyActionCode } from 'firebase/auth';

//投稿画面の地図。タッチした場所の緯度経度を取得する。
export default {
  name: 'GoogleMap',
  data() {
    return {
      lat: 35.6764,
      lng: 139.6500,
    };
  },
   methods: {
    getSelectedPosition (event) {
      this.lat = event.latLng.lat()
      this.lng = event.latLng.lng()
      console.log(this.lat)
      console.log(this.lng)

      /*this.globallat = this.lat
      this.globallongi = this.lng

      console.log(this.globallat)
      console.log(this.globallongi)*/

      window.kuwagloballat = this.lat
      window.kuwagloballongi = this.lng
      
      console.log(window.kuwagloballat);  // 3017を出力
      console.log(window.kuwagloballongi); // 2021を出力
      

    },

 }
};
</script>