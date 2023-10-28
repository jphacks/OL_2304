import { addDoc,collection,serverTimestamp, getDocs, getFirestore, query, where} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseApp } from "./firebase";
import { v4 as uuidv4 } from 'uuid';

//猫の情報をアップロードする関数。filedata(写真)だけじゃなくて設計に従って猫のIDとか柄とかも入れる
//addDoc(collection(dbfirestore, "test"), {
//    username: "Ada",
//  });みたいな感じでfirebaseにデータを送れる
export const uploadCat=(catdata)=>{
  const metadata={
    contentType: 'image/jpeg',
  }
  const imageId = uuidv4();
  const storage = getStorage();
  const imageRef = ref(storage, '/' + imageId);
  uploadBytesResumable(imageRef, catdata.image, metadata)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          addDoc(collection(getFirestore(), "TestCat"), {
            imageurl : url,
            color : catdata.color,
            pattern : catdata.pattern,
            breed : catdata.breed,
            AdultOrChild : catdata.AdultOrChild,
            isEarCut : catdata.isEarCut,
            hasCollar : catdata.hasCollar,
            comment : catdata.comment,
            latitude : catdata.latitude,
            longitude : catdata.longitude,
            userId : catdata.userId,
            isNew : catdata.isNew,
            postedAt: serverTimestamp()
          })
            .then(()=>{
              console.log('success')
            })
            .catch((e)=>{
              console.log('fail',e)
            })
        });
    })
    .catch((error) => {
      console.error('Upload failed', error);
    });
}

//猫の情報を持ってくる関数。これはまだいじってないので、ちゃんと動かすには色々変える必要がある
export const downloadCat=async()=>{
  const data =[]
  const querySnapshot = await getDocs(collection(getFirestore(firebaseApp), "test"))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data())
  })
  return data
}

// 猫を検索する関数. 今は猫のIDを返すようにしてるけど、猫の情報を返すように変える必要がある
export const searchCat = async (filter) => {
    const data = [];
    const collectionRef = collection(getFirestore(firebaseApp), "TestCat");
    let queryRef = collectionRef;

    // 猫の情報を絞り込む
    if (filter.color) {
      queryRef = query(queryRef,where("color", "==", filter.color));
    }
    if (filter.pattern) {
      queryRef = query(queryRef,where("pattern", "==", filter.pattern));
    }
    if (filter.breed) {
      queryRef = query(queryRef,where("breed", "==", filter.breed));
    }
    if (filter.AdultOrChild) {
      queryRef = query(queryRef,where("AdultOrChild", "==", filter.AdultOrChild));
    }
    if (filter.isEarCut) {
      queryRef = query(queryRef,where("isEarCut", "==", filter.isEarCut));
    }
    if (filter.hasCollar) {
      queryRef = query(queryRef,where("hasCollar", "==", filter.hasCollar));
    }
    if (filter.latitude) {
      queryRef = query(queryRef,where("latitude", "==", filter.latitude));
    }
    if (filter.longitude) {
      queryRef = query(queryRef,where("longitude", "==", filter.longitude));
    }
    if (filter.keepitfalse) { //TODO: 日時で絞り込み
      queryRef = query(queryRef,where("postedAt", "<", Date(filter.postedAt)));
    }
    if (filter.isNew) {
      queryRef = query(queryRef,where("isNew", "==", filter.isNew));
    }
  
    const querySnapshot = await getDocs(queryRef);
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    return data;
  };