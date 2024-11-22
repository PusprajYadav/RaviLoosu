import Nav from "../Admin/Nav";
import axios from "axios";
import "./AllForms.css"; // Assuming the styles for your form and table are in this file.
import { useState, useEffect } from "react";

// Define BASE_URL at the top of the component
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Blogs() {
  // State to hold the data for creating a new blog
  const [Blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  // Handle changes for input fields
  const handleChangeBlog = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        setBlog((prevBlog) => ({
          ...prevBlog,
          image: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      setBlog((prevBlog) => ({
        ...prevBlog,
        [name]: value,
      }));
    }
  };

  // Submit button to post the blog data to backend
  const handleSubmitBlog = () => {
    axios
      .post(`${BASE_URL}/api/Admin/Blogs`, Blog, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Blog Post Created Successfully");
        // Reset the form after submission
        setBlog({
          title: "",
          description: "",
          image: "",
          link: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Blog Post Creation Failed");
      });
  };

  // Fetch all blogs from the backend
  const [getBlogs, setGetBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/GetAllBlog`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setGetBlogs(res.data.allBlogs))
      .catch((err) => console.log(err));
  }, []);

  // Delete blog by ID
  function DeleteBlog(id) {
    axios
      .delete(`${BASE_URL}/api/DeleteBlogById/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("Blog Post Deleted Successfully");
        // Remove the deleted blog from the state
        setGetBlogs(getBlogs.filter((blog) => blog._id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Error deleting Blog");
      });
  }

  return (
    <div className="BodyContent">
      <Nav />

      <div className="Alumi">
        <div className="forms">
          <h1 className="aluminih1">
            Add <span>Blog</span>
          </h1>
          <input
            type="text"
            placeholder="Enter Blog Title"
            onChange={handleChangeBlog}
            value={Blog.title}
            name="title"
            className="inputfield"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Blog Description"
            onChange={handleChangeBlog}
            value={Blog.description}
            name="description"
            className="inputfield"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Blog Link"
            onChange={handleChangeBlog}
            value={Blog.link}
            name="link"
            className="inputfield"
          />
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeBlog}
            name="image"
            className="inputfield"
          />
          <br />

          <button className="btnu submitbtn" onClick={handleSubmitBlog}>
            Submit
          </button>
        </div>

        <div className="GetAlumaidata">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
                <th>Image</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {getBlogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.description}</td>
                  <td>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {blog.link}
                    </a>
                  </td>
                  <td>
                    <img src={blog.image} alt="Blog" width="150" height="150" />
                  </td>
                  <td>
                    <button
                      className="btnd"
                      onClick={() => DeleteBlog(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
