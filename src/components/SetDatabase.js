import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const addNewData = async (data,müsteriIsmi,olusturmaTarihi,isNumarası,notifySuccess,notifyError) => {
  try {
    const ordersCollectionRef = collection(db, "Veriler");
    // const invalidData = { invalidField: undefined }
    await addDoc(ordersCollectionRef, { data: data,musteriIsmi:müsteriIsmi ,olusturmaTarihi:olusturmaTarihi,isNumarası:isNumarası});
    notifySuccess()
  } catch (error) {
    console.error("Error adding new order: ", error);
    notifyError()
  }
};
export default addNewData;
