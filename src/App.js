import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Bluink
import Home from "./Bluink/Home.jsx";
import Course from "./Bluink/Course.jsx";
import Jobs from "./Bluink/Jobs.jsx";
import Events from "./Bluink/Events.jsx";
import OurAlumani from "./Bluink/OurAlumani.jsx";
import Aboutus from "./Bluink/Aboutus.jsx";
import Privacy from "./Bluink/Privacy.jsx";
import Terms from "./Bluink/Terms.jsx";
import Blogs from "./Bluink/Blogs.jsx";

// import Form from "./Bluink/Components/Form.jsx";
// import Courseban from "./Bluink/Components/Courseban.jsx";

//Admin
import RegisteredUser from "./Admin/RejistredUsers";
import Alumanai from "./Admin/Alumanai";

import PostEvents from "./Admin/Events";
import PostJobs from "./Admin/Jobs";
import AdminLogin from "./Admin/AdminLogin";
import AlumanaiUpdate from "./Admin/AlumaniUpdate";
import PostBlogs from "./Admin/AddBlogs.jsx";
import ContentDevelopment from "./Bluink/ContentDevelopment.jsx";
import CorperateTraining from './Bluink/CorperateTraining.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Blunik */}
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/OurAlumani" element={<OurAlumani />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
          <Route path="/Terms&Condition" element={<Terms />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/ContentDevelopment" element={<ContentDevelopment />} />
          <Route path="/CorperateTraining" element={<CorperateTraining />} />

          {/* Admin */}
          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/RegistredUser" element={<RegisteredUser />} />
          <Route path="/Alumanai" element={<Alumanai />} />
          <Route path="/AluUpdate" element={<AlumanaiUpdate />} />
          <Route path="/PostEvents" element={<PostEvents />} />
          <Route path="/PostJobs" element={<PostJobs />} />
          <Route path="/PostBlogs" element={<PostBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
