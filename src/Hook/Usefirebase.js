import React, { useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,  } from "firebase/auth";
import initilaizeFirebasw from '../Firebase/Firebase.init';
import axios from 'axios';
initilaizeFirebasw()
  const Usefirebase = () => {
  const [user, setUser] = useState({})
   const [error, setError] = useState('')
   const [Loding, setLoding] = useState(true)
  
   const auth = getAuth();
   const handelRegister = (email, password, name,location,history) => {
      setLoding(true)
         console.log(email,password ,name);
      createUserWithEmailAndPassword(auth, email, password)
          
         .then((userCredential) => {
            const newUser = { email, displayName: name }
            setError('')
             setUser(newUser)
              newUsers(email,name)
            const user = userCredential.user;
            const users = location?.state?.from || '/'
            history.replace(users)
            setUser(newUser)
            setUser(user)
            setError('')
            updateProfile(auth.currentUser, {
               displayName: name
            }).then(() => {
               setUser(user)
               setError('')
            }).catch((error) => {
               setError(error.message)

            })
               ;
         })
         .catch((error) => {

            setError(error.message)
         }).finally(() => setLoding(false));
   }

   const  handelLogin= (email, password,location,history) => {
      setLoding(true)
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
        const user = userCredential.user;
        const users = location?.state?.from || '/'
            history.replace(users)
            setUser(user)
            setError('')
         })
         .catch((error) => {

            setError(error.message);
         })
         .finally(() => setLoding(false));
   }
   const handelLogout=()=>{
         setLoding(true)
         const auth = getAuth();
         signOut(auth).then(() => {
   
            setError('')
         }).catch((error) => {
   
            setError(error.message)
         })
         .finally(() => setLoding(false));
          
   
      }
      const newUsers=(email,displayName)=>{
         const user={email,displayName}
         fetch('https://damp-ridge-45794.herokuapp.com/users',{
            method:'POST',
            headers:{
               'content-type':'application/json'
            },
            body:JSON.stringify(user)

         })

      }
   
  
  
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {

            setUser(user)


         } else {

            setUser({})
         }
         setLoding(false)
      });
      return () => unsubscribe;
   }, [])

    
    
    return{
      error,
      Loding,
      user,
      handelRegister,
      handelLogin,
      handelLogout,
      setLoding,
      
      
    } 
   };
   
   export default Usefirebase;