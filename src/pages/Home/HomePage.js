import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import "./HomePage.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = useCallback(async () => {
    setLoading(true);

    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "be32778163msh0afdb4f2b29f980p1bc5bcjsnfcadab383d48",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `https://bing-news-search1.p.rapidapi.com/news/search?q=technology&freshness=Day&textFormat=Raw&safeSearch=Off`,
        options
      );
      const data = await response.json(); // Parse the response stream
      setPosts(data.value); // Set the state of posts with the parsed data
      console.log(data); // Log the parsed data to the console if needed
      setError("");
    } catch (error) {
      setError("An error occurred while loading the news.");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleRefresh = async () => {
    try {
      await fetchNews();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="home">
      <h1>Welcome to TechWave</h1>
      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && posts && posts.length > 0 && (
        <div className="hello">
          <button className="button" onClick={handleRefresh}>Refresh news</button>
          <Container className="post-container">
            {posts.map((post) => (
              <div className="post" key={post.url}>
                <h2>{post.name}</h2>
                <p>{post.description}</p>
                <a href={post.url} target="_blank" rel="noreferrer">
                  Read more
                </a>
              </div>
            ))}
          </Container>
        </div>
      )}
    </div>
  );
};

export default Home;