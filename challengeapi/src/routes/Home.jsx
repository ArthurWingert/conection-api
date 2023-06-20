import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      setPosts(data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleReload = () => {
    getPosts();
  };

  return (
    <div className="container">
      <div className="phrase">
        <div className="post">{posts}</div>
      </div>
      <div className="button">
        <button className="button2" onClick={handleReload}>
          Nova Frase
        </button>
      </div>
    </div>
  );
};

export default Home;
