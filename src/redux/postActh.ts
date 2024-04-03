import { PostInfo } from "./../Common/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { setLoading, setProgress } from "./uploadSlice";

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ postInfo }: { postInfo: PostInfo }, { dispatch }) => {
    try {
      if (postInfo.sharImage) {
        const storageRefImage = ref(
          storage,
          `images/${postInfo.sharImage.name}`
        );

        const uploadTask = uploadBytesResumable(
          storageRefImage,
          postInfo.sharImage
        );

        dispatch(setLoading(true));

        const res = uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(`Upload is ${progress}% Done.!`);
            dispatch(setProgress(progress));
          },
          (error) => {
            throw error;
          },
          async () => {
            try {
              dispatch(setLoading(false));
              dispatch(setProgress(0));
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
              const collRef = collection(db, "posts");
              await addDoc(collRef, {
                user: {
                  userName: postInfo.userName,
                  emailAddress: postInfo.emailAddress,
                  photo: postInfo.photo,
                },
                sharVideo: postInfo.sharVideo,
                description: postInfo.description,
                time: postInfo.time,
                sharImage: downloadUrl,
              });
            } catch (error) {
              throw error;
            }
          }
        );
        console.log("...........", res);
        return res;
      } else if (postInfo.sharVideo) {
        const collRef = collection(db, "posts");
        await addDoc(collRef, {
          user: {
            userName: postInfo.userName,
            emailAddress: postInfo.emailAddress,
            photo: postInfo.photo,
          },
          sharVideo: postInfo.sharVideo,
          description: postInfo.description,
          time: postInfo.time,
          sharImage: postInfo.sharImage,
        });
      } else {
        const collRef = collection(db, "posts");
        await addDoc(collRef, {
          user: {
            userName: postInfo.userName,
            emailAddress: postInfo.emailAddress,
            photo: postInfo.photo,
          },
          sharVideo: postInfo.sharVideo,
          description: postInfo.description,
          time: postInfo.time,
          sharImage: postInfo.sharImage,
        });
      }

      dispatch(renderPosts());
    } catch (error) {
      throw error;
    }
  }
);

/************************************************************** */
export const renderPosts = createAsyncThunk<PostInfo[]>(
  "posts/renderPosts",
  async () => {
    const posts: PostInfo[] = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      const postData = doc.data(); // Access all fields of the document
      const time = postData.time.toDate(); // Assuming 'time' is the property containing the Firebase Timestamp

      const post: PostInfo = {
        id: doc.id,
        userName: postData.user.userName,
        emailAddress: postData.user.emailAddress,
        photo: postData.user.photo,
        time,
        sharImage: postData.sharImage,
        sharVideo: postData.sharVideo,
        description: postData.description,
      };

      posts.push(post);
    });
    console.log("first22222", posts);
    return posts;
  }
);
