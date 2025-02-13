import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const addNewData = async (data,notifySuccess,notifyError) => {
  try {
    const ordersCollectionRef = collection(db, "Veriler");
    // const invalidData = { invalidField: undefined }
    await addDoc(ordersCollectionRef, { data: data });
    notifySuccess()
  } catch (error) {
    console.error("Error adding new order: ", error);
    notifyError()
  }
};
export default addNewData;
