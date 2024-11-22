import React, { useState, useRef, useEffect } from "react";
import "./News.css";

const images = [
  {
    images:
      "https://adarshmaharashtra.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-04-at-12.44.51-PM-1.jpeg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://example.com/page1",
  },
  {
    images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Deccan_Herald_logo.svg/1200px-Deccan_Herald_logo.svg.png",
    content: "Lorem ipsum dolor sit amet consectetur.",
    link: "https://example.com/page2",
  },
  {
    images:
      "https://www.asianprimenews.com/wp-content/uploads/2022/03/Logo-Web-3.gif",
    content: "Lorem ipsum dolor sit amet consectetur.",
    link: "https://example.com/page3",
  },
  {
    images:
      "https://pbs.twimg.com/profile_images/1339400411304787969/CM6I85g6_400x400.jpg",
    content: "Lorem ipsum dolor sit amet consectetur.",
    link: "https://example.com/page4",
  },
  {
    images:
      "https://www.asianprimenews.com/wp-content/uploads/2022/03/Logo-Web-3.gif",
    content: "Lorem ipsum dolor sit amet consectetur.",
    link: "https://example.com/page3",
  },
  {
    images:
      "https://pbs.twimg.com/profile_images/1339400411304787969/CM6I85g6_400x400.jpg",
    content: "Lorem ipsum dolor sit amet consectetur.",
    link: "https://example.com/page4",
  },
  {
    images:
      "https://www.asianprimenews.com/wp-content/uploads/2022/03/Logo-Web-3.gif",
    content: "Lorem ipsum dolor sit amet consectetur.",
    link: "https://example.com/page3",
  },
  {
    images:
      "https://pbs.twimg.com/profile_images/1339400411304787969/CM6I85g6_400x400.jpg",
    content: "Lorem ipsum dolor sit amet consectetur.",
    link: "https://example.com/page4",
  },
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  // Function to handle scroll and update active index
  const handleScroll = () => {
    const scrollPosition = galleryRef.current.scrollLeft;
    const cardWidth = galleryRef.current.offsetWidth / images.length;
    const newActiveIndex = Math.floor(scrollPosition / cardWidth);
    if (newActiveIndex !== currentIndex) {
      setCurrentIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    const galleryElement = galleryRef.current;
    galleryElement.addEventListener("scroll", handleScroll);
    return () => galleryElement.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  return (
    <div>
      <h1 className="Newsh1">
        Bluink360 at <span>@News</span>
      </h1>
      <div className="news-gallery_wrapper" ref={galleryRef}>
        <ul className="news-gallery_list">
          {images.map((image, index) => (
            <li
              key={index}
              className={`news-gallery_item ${
                currentIndex === index ? "news-active" : ""
              }`}
            >
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log(`Navigating to ${image.link}`)} // Console log for debugging
              >
                <img
                  src={image.images}
                  alt={`Slide ${index}`}
                  className="news-gallery_image"
                />
              </a>
              {/* <p>{image.content}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
