import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import ScrollAnimation from "./ScrollAnimation"; // <-- import the scroll animation

const About = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setVisibleSections((prev) => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      title: "Our Passion",
      text: "At Kiwi Lawn Services, we’re just a couple of local blokes with a passion for keeping Kiwi lawns looking top-notch.",
      img: "/images/KLS-no-bg.png",
    },
    {
      title: "Our Approach",
      text: "As a two-man team, we take pride in delivering quality service with a no-fuss, straight-up approach.",
      img: "/images/KLS-no-bg.png",
    },
    {
      title: "Our Values",
      text: "We believe in working hard, working fast, and—most importantly—working with integrity.",
      img: "/images/KLS-no-bg.png",
    },
    {
      title: "Customer Satisfaction",
      text: "Customer satisfaction is at the heart of what we do because, at the end of the day, we’re not just here to mow lawns—we’re here to build trust and good relationships with our community.",
      img: "/images/KLS-no-bg.png",
    },
    {
      title: "Our Commitment",
      text: "We’re a small band, hustling for a living, and we appreciate every customer who backs the little guys. Let us take care of your lawn, and we’ll make sure it’s looking sharp in no time!",
      img: "/images/KLS-no-bg.png",
    },
  ];

  return (
    <>
      {/* The scroll animation overlay */}
      <ScrollAnimation />
      
      <div className="container-fluid main-container py-5">
        <h1 className="text-success fade-in-title">About Us</h1>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`fade-in-section ${visibleSections.includes(index) ? "visible" : ""}`}
          >
            <div className="row align-items-center my-5">
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 text-center">
                    <img
                      src={section.img}
                      alt={section.title}
                      className="img-fluid fade-in-image"
                    />
                  </div>
                  <div className="col-md-6">
                    <h2 className="h4">{section.title}</h2>
                    <p className="lead">{section.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <h2 className="h4">{section.title}</h2>
                    <p className="lead">{section.text}</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src={section.img}
                      alt={section.title}
                      className="img-fluid fade-in-image"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
