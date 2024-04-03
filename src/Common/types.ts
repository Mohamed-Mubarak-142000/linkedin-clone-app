import { ChangeEvent } from "react";
import firebase from "firebase/firestore";

export interface ChangeEventHandler<T = HTMLInputElement> {
  (event: ChangeEvent<T>): void;
}

export interface User {
  accessToken: string ;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  uid: string | null;
}

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface Firebase {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface DropDwonMeProps {
  toggleDropdown: () => void;
  isopen: boolean ;
}

export interface ChildrenType {
  children: React.ReactNode;
}

export interface HandleModel {
  handleModel: () => void;
}

export interface SetTextPost {
  setText: string |null ;
  text: string | null;
}

export interface TypedHandler {
  (typed: string): void;
}

export interface HandleShowImage {
  handleSherTyped: (typed: string) => void;
  text?: string;
  sharImage?: File | Blob | Uint8Array | ArrayBuffer | null;
  sharVideo?: string;
  handleGenretPost: (e:ChangeEventHandler<HTMLInputElement> ) => void;
}

// export interface Post {
//   user: User | null;
//   image: string | null;
//   video: string | null;
//   description: string | null;
// }

export interface PostInfo {
  id?:string;
  userName: string | null;
  emailAddress: string | null;
  photo: string | null;
  sharImage?: any ;
  sharVideo?: string | Blob | Uint8Array | ArrayBuffer | null;
  description?: string | null;
  time: Date | firebase.Timestamp | null;

}

export interface PostState {
  post: PostInfo[] | null;
  isLoading: boolean;
  error: string;
}