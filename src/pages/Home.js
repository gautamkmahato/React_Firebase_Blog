import { async } from '@firebase/util';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { auth, db } from '../firebase_config';

function Home({isAuth}) {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    getPosts();
  },[]);

  const getPosts = async ()=> {
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    <Navigate to="/" />
  }

  return (
    <>
      <div className='homepage'>
        <div className='posts'>
          {postList.map((val) => {
            return(
              <>
                <h3>{val.title}</h3>
                <p>{val.post}</p>
                <p>@{val.author.name}</p>
                {isAuth && val.author.id === auth.currentUser.uid && (
                  <button onClick={() => {deletePost(val.id)}}>Delete</button>
                ) }
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home