import React, { useState } from 'react'
import {auth, googleProvider} from '../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    const signIn = async() => {
        try {

            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error){
            console.log(error)
        }
    }

    const logOut = async() => {
        try {

            await signOut(auth)
        } catch (error){
            console.log(error)
        }
    }

    const signInWithGoogle = async() => {
        try {

            await signInWithPopup(auth,googleProvider)
        } catch (error){
            console.log(error)
        }
    }
  return (
    <div>
        <input 
            type="text"
            placeholder='Email' 
            onChange={e => setEmail(e.target.value)}
        />

        
        <input 
            type="password" 
            placeholder='Password' 
            onChange={e => setPassword(e.target.value)} 
        />

        <button onClick={signIn}>Sign in</button>

        <button onClick={signInWithGoogle}>Sign in with Google</button>

        <button onClick={logOut}>Logout</button>

    </div>
  )
}

export default Auth
