import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { User } from "../Common/types";

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  }
);

export const initializeAuthentication = createAsyncThunk(
  "auth/initializeAuthentication",
  async () => {
    return new Promise<User | null>((resolve) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          const userinfo: User = {
            accessToken: user.accessToken , 
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            uid: user.uid,
          };
          resolve(userinfo);
          console.log("first9999999", userinfo)
        } else {
          resolve(null);
        }
      });
    });
  }
);
  
export const signOut = createAsyncThunk<User[] | null>("auth/signOut" , async(_,{rejectWithValue})=>{
  try {
    await auth.signOut();
    return null;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error)
  }
})