import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import db from "./firebaseConfig";

export const getInfo = (setInfo, path) => {
  const collectionRef = collection(db, path);
  onSnapshot(collectionRef, (snapshot) => {
    return setInfo(
      snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
    );
  });
};

export const addInfo = async (data, path) => {
  const collectionRef = collection(db, path);
  const docRef = await addDoc(collectionRef, data);
};

export const deleteInfo = async (path, id) => {
  const docRef = doc(db, path, id);
  await deleteDoc(docRef);
};
