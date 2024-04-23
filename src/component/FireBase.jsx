import React from 'react';
import { getFirestore, collection, addDoc, doc, getDoc, query, where,getDocs, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from '../firebase'
import { Button } from '@mui/material';

 
const FireBase = () => {
    const firestore =getFirestore(app);
    const storage = getStorage(app)

    const writeData = async() => {
       const result = await addDoc(collection(firestore,'users'), {
            fname:'anand',
            lname:'ladani',
            age:24
        })
        console.log(result);
    }
    const makeSubCollection = async() => {
        await addDoc(collection(firestore, 'users/qdnqaaxxx/details'),{
            addres:'xyz',
            city:'xxx',

        })
    }
    const getDocument = async() => {
        const ref = doc(firestore, 'users','id of user dcewazzxxxx');
        const snap = await getDoc(ref)
        console.log(snap.data());
    }
    const getDocumentByQueries = async() => {
        const collectionRef = collection(firestore,'users');
        const q = query(collectionRef, where('fname', '==', true))
        const snapShot = await getDocs(q);
        snapShot.forEach((data)=> console.log(data.data()))
    }
    const updateDocument = async() => {
        const docRef = doc(firestore,'users', 'id xxxxxx');
       await updateDoc(docRef,{
            name:'anandBhai'
        }
        )
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        await creatNewListing()
    }
    const creatNewListing = async(data) =>{
        await addDoc(collection(firestore,'users'), {
            fname:'anand',
            lname:'ladani',
            age:24,
            userId:user.uid,
            userEmail:user.email,   
        })
    }
  return (
    <div>
        <Button onClick={writeData}>add user</Button>
        <Button onClick={makeSubCollection}>add user</Button>
        <Button onClick={getDocument}>Get user</Button> 
        <Button onClick={getDocumentByQueries}>Get user with query</Button> 
        <Button onClick={updateDocument}> user update</Button> 
    </div>
  )
}

export default FireBase 