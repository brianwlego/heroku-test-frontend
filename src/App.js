import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [post, setPost] = useState('')

  useEffect(()=> {
    fetch('http://localhost:3000/posts')
      .then(resp=> resp.json())
      .then(data => {
        setPost(data.post)
      })
    }, []);
  

  return (
    <div>
      <h1>{post === '' ? 'No Posts' : post}</h1>
    </div>
  );
}

export default App;
