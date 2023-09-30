import React, {useState} from "react";
import Card from "../Card";
import cohortImage from "../images/cohortSS.png";
import birdImage from "../images/birdSS.png";
import codeImage from "../images/codeSS.png";
import workImage from "../images/workdaySS.png";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {Carousel, initTE} from "tw-elements";

initTE({ Carousel });


const Portfolio = () => {
  const slides = [
    {
      title: "Cohort Retort",
      img: cohortImage,
      depLink: "https://cohort-retort-v1-3ead1d24c761.herokuapp.com",
      gitHubLink: "https://github.com/MichaelFormico/Cohort-Retort",
      alt: "Snapshot of a cohort-retort webpage",
      description:
        "This app was created using a full MERN stack. It is a social networking app designed to keep classmates in touch. Each user has their own profile page, where the user can update their information. To sign in as a guest user: Email: guest@email.com Password: password",
    },
    {
      title: "Bird Project",
      img: birdImage,
      depLink: "https://michaelformico.github.io/Bird_Project/",
      gitHubLink: "https://github.com/MichaelFormico/Bird_Project",
      alt: "",
      description:
        "A unique app that can show you the different sounds birds make. Take a search and see some very interesting birds and hear the sounds they make!",
    },
    {
      title: "Work Day Scheduler",
      img: workImage,
      depLink: "https://michaelformico.github.io/Work-Day-Scheduler/",
      gitHubLink: "https://github.com/MichaelFormico/Work-Day-Scheduler",
      alt: "A gif of the app.",
      description:
        "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    },
    {
      title: "Code Board",
      img: codeImage,
      depLink: "https://codeboard.herokuapp.com/login",
      gitHubLink: "https://github.com/shale00/Code-Quiz",
      alt: "Screenshot of app",
      description:
        "The first iteration of Cohort Retort. A much more basic social networking app to connect with classmates. Not quite as many features as Cohort Retort, but a very cool app in its own right.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

   return (
    <div className="flex justify-center items-center"> {/* Center content */}
      <div className="max-w-lg justify-center relative group">
        <Card
          title={slides[currentIndex].title}
          img={slides[currentIndex].img}
          description={slides[currentIndex].description}
          depLink={slides[currentIndex].depLink}
          gitHubLink={slides[currentIndex].gitHubLink}
          alt={slides[currentIndex].alt}
        />
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled className="teal" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;