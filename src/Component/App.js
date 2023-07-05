import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { getPosts } from '../Api';
import { Home, Login, Page404 } from '../pages';
import { Loader, Navbar } from './';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);

      if (response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
  <div className="App">
        <Navbar />
      
      <Routes>
          <Route exact path="/" element={<Home posts={posts} />}></Route>
          <Route exact path="/login" element={<Login />}> </Route>
          
         
      </Routes>
      
  </div>
    </Router>
  );
}

export default App;
