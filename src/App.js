import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './components/Post';
import {db} from './firebase';

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username: 'SashaQmk',
    //   caption: "wow, i'm coding instagram app",
    //   imageUrl: './images/1.png',
    // },
    // {
    //   username: 'Vasya',
    //   caption: 'cool thing',
    //   imageUrl: 'https://cdn.pixabay.com/photo/2020/06/02/01/33/sakura-5248955_1280.jpg',
    // },
    // {
    //   username: 'Ira',
    //   caption: 'gogogogo fdffdfdfdfsf',
    //   imageUrl: './images/3.jpg',
    // },
  ]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    );
  }, [posts]);


  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerImage">
          <img
            className="app__headerImage"
            src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </div>
      </div>


      {posts.map(({id, post}) => (
        <Post
        key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      <h1>Heellloo</h1>
    </div>
  );
}

export default App;
