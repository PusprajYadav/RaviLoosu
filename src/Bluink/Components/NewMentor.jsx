import React, { useState, useRef, useEffect } from "react";
import "./NewMentor.css";

function MentorCards() {
  const mentorData = [
    {
      id: 1,
      name: "Deepthi",
      image: require("../../Assets/mentor1.png"),
      title: "Software Developer and Educator - PWSkills",
      description:
        "Software dev | 3.5+ yrs teaching | Online Coding Mentor | Empowering Students",
    },
    {
      id: 2,
      name: "John Doe",
      image: require("../../Assets/mentor2.png"),
      title: "Senior Developer - Tech Company",
      description:
        "10+ years experience in software development, specializing in backend technologies.",
    },
    {
      id: 3,
      name: "Jane Smith",
      image: require("../../Assets/mentor3.png"),
      title: "Data Scientist - Data Inc.",
      description:
        "Data enthusiast with 5+ years of experience in machine learning and data analytics.",
    },
    // {
    //   id: 4,
    //   name: "Alice Johnson",
    //   image: require("../../Assets/mentor1.png"),
    //   title: "UI/UX Designer - Creative Studio",
    //   description:
    //     "Passionate about design with 7+ years of experience in creating user-friendly interfaces.",
    // },
    
  ];

  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle scroll and update active index
  const handleScroll = () => {
    const scrollPosition = galleryRef.current.scrollLeft;
    const cardWidth = galleryRef.current.offsetWidth / mentorData.length;
    const newActiveIndex = Math.floor(scrollPosition / cardWidth);
    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    const galleryElement = galleryRef.current;
    galleryElement.addEventListener("scroll", handleScroll);
    return () => galleryElement.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="mentorcards">
      <h1 className="smentor">Skilled Mentors From MAANG</h1>
      <div className="new-Mentor-cards-container" ref={galleryRef}>
        {mentorData.map((mentor, index) => (
          <div
            className={`new-Mentor-card ${
              activeIndex === index ? "news-active" : ""
            }`}
            key={mentor.id}
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="new-Mentor-image"
            />
            <div className="new-Mentor-content">
              <h3 className="new-Mentor-name">{mentor.name}</h3>
              <p className="new-Mentor-title">{mentor.title}</p>
              <div className="new-Mentor-experience">
                <div className="new-Mentor-experience-item">
                  <i className="fas fa-briefcase icon"></i> 3+ Years Work
                  Experience
                </div>
                <div className="new-Mentor-experience-item">
                  <i className="fas fa-chalkboard-teacher icon"></i> 3+ Years
                  Teaching Experience
                </div>
              </div>
              <p className="new-Mentor-description">{mentor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorCards;
