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

const addNewData = async (data) => {

    console.log("data is")
    console.log(data)
  try {
    const ordersCollectionRef = collection(db, "Veriler");

    await addDoc(ordersCollectionRef, {data : data});

  } catch (error) {
    console.error("Error adding new order: ", error);
  }
};

export default addNewData;
