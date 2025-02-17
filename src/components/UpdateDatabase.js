import { collection, addDoc,updateDoc,doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const updateDatabase = async (data,müsteriIsmi,olusturmaTarihi,isNumarası,notifySuccess,notifyError,databaseId) => {
  
    // console.log(databaseId)  
        try {
          const orderDocRef = doc(db, "Veriler", databaseId);
          await updateDoc(orderDocRef, {data: data,musteriIsmi:müsteriIsmi ,olusturmaTarihi:olusturmaTarihi,isNumarası:isNumarası});
          notifySuccess()
        } catch (error) {
          console.error("Error updating order: ", error);
          notifyError()
        }

    
  
  
//     try {
//     const ordersCollectionRef = collection(db, "Veriler");
//     // const invalidData = { invalidField: undefined }
//     await addDoc(ordersCollectionRef, { data: data,musteriIsmi:müsteriIsmi ,olusturmaTarihi:olusturmaTarihi,isNumarası:isNumarası});
//     notifySuccess()
//   } catch (error) {
//     console.error("Error adding new order: ", error);
//     notifyError()
//   }


};
export default updateDatabase;
