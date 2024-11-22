import "./Blogs.css";
import Footer from "./Components/Footer";
import Navbar from "./Navigate";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Components/Loader";

// Define BASE_URL at the top of the component
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Blogs() {
  const [getBlogs, setGetBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/GetAllBlog`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setGetBlogs(res.data.allBlogs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="text">
        <h1>Our Blogs</h1>
      </div>
      <div className="BlogsContainer">
        <section className="blogsection">
          {loading ? (
            <Loader /> // Show Loder component while loading
          ) : getBlogs.length > 0 ? (
            getBlogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                <img src={blog.image} alt={blog.title} />
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
                <a href={blog.link}>Read More</a>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </section>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Blogs;
