import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const addNewData = async (x) => {

    console.log("data is")
    console.log(x)
//   try {
//     const ordersCollectionRef = collection(db, "Deneme");

//     await addDoc(ordersCollectionRef, {data : x});

//   } catch (error) {
//     console.error("Error adding new order: ", error);
//   }
};

export default addNewData;
