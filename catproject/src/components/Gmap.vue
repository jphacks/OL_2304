<template>
  <GMapMap
      :center= "{ lat: 35.6764, lng: 139.6500 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"  
      @load="getLocation"
      
  >
  </GMapMap>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 35.6764, lng: 139.6500 },
    };
  },
   methods: {
   getLocation () {
     if (process.client) {
       if (!navigator.geolocation) {
         alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
         return
       }

       const options = {
         enableHighAccuracy: false,
         timeout: 5000,
         maximumAge: 0
       }

       navigator.geolocation.getCurrentPosition(this.success, this.error, options)
     }
   },

   success (position) {
     this.lat = position.coords.latitude
     this.lng = position.coords.longitude
   },

   error (error) {
     switch (error.code) {
       case 1: //PERMISSION_DENIED
         alert('位置情報の利用が許可されていません')
         break
       case 2: //POSITION_UNAVAILABLE
         alert('現在位置が取得できませんでした')
         break
       case 3: //TIMEOUT
         alert('タイムアウトになりました')
         break
       default:
         alert('現在位置が取得できませんでした')
         break
     }
   }
 }
};
</script>