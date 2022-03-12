import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase_config';
import { useNavigate } from 'react-router-dom';


function CreatePost() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postCollectionRef = collection(db, "posts");
  const navigate = useNavigate();
  const handleCreatePost = async () => {
    try{
      await addDoc(postCollectionRef, {
        title: title,
        post: post,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      });
      navigate("/");
    } catch{
      console.log("Error")
    }
  }

  return (
    <>
      <div className='container'>
        <div className='post-container'>
          <h1>Create a Post</h1>
          <div className='input-group'>
            <input value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder='title...' />
            <input value={post} onChange={(e) => {setPost(e.target.value)}} placeholder='post...' />
            <button onClick={handleCreatePost}>Submit Post</button>
          </div>
        </div>
      </div>
    </> 
  )
}

export default CreatePost