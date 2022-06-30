import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import db, { storage } from "./firebaseConfig";

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

export const uploadToFb = (file, setImage) => {
  const storageRef = ref(storage, `/avatar/${file.name}`);
  const uploadData = uploadBytesResumable(storageRef, file);
  uploadData.on(
    "state_changed",
    (snapshot) => {
      const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(prog);
    },
    (err) => {
      console.error(err);
    }, () => {
      getDownloadURL(uploadData.snapshot.ref)
        .then(url => {
          console.log(url);
          setImage(url)
        })
    }
  );
};
