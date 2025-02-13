import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const addNewData = async (data) => {
  try {
    const ordersCollectionRef = collection(db, "Veriler");
    let x = { a1: "ahmet", a2: 2, a3: false, a4: undefined };
    await addDoc(ordersCollectionRef, { data: x });
  } catch (error) {
    console.error("Error adding new order: ", error);
  }
};
export default addNewData;
