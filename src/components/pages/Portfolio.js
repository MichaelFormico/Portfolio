import React, {useState} from "react";
import Card from "../Card";
import backgroundPortfolio from "../images/backgroundPortfolio.gif";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {Carousel, initTE} from "tw-elements";

initTE({ Carousel });


const Portfolio = () => {
  const slides = [
    {
      title: "Cohort Retort",
      img: backgroundPortfolio,
      depLink: "https://cohort-retort-v1-3ead1d24c761.herokuapp.com",
      gitHubLink: "https://github.com/shale00/Cohort-Retort",
      alt: "Snapshot of a cohort-retort webpage",
      description:
        "This app was created using a full MERN stack. It is a social networking app designed to keep classmates in touch. Users can create an account and post messages and comments. Each user has their own profile page, where the user can update their information. To sign in as a guest user: Email: guest@email.com Password: password",
    },
    {
      title: "Parktivities",
      img: backgroundPortfolio,
      depLink: "https://shale00.github.io/Parktivities/",
      gitHubLink: "https://github.com/shale00/Parktivities",
      alt: "Snapshot of the Parktivities app.",
      description:
        "This app allows the user to search national parks via state or activity. It was created using HTML, CSS, and JavaScript and uses two different 3rd Party API's to retrieve the park data and the state flag for each park respectively. It also stores the user's search history using local storage.",
    },
    {
      title: "Weather Dashboard",
      img: backgroundPortfolio,
      depLink: "https://shale00.github.io/Weather-Dashboard/",
      gitHubLink: "https://github.com/shale00/Weather-Dashboard",
      alt: "",
      description:
        "This is a simple weather app that allows the user to search a city and display the weather data. The app will save the users search history and allow the user to recall the weather data from their history as well.",
    },
    {
      title: "Work Day Scheduler",
      img: backgroundPortfolio,
      depLink: "https://shale00.github.io/Work-Day-Scheduler/",
      gitHubLink: "https://github.com/shale00/Work-Day-Scheduler",
      alt: "A gif of the app.",
      description:
        "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    },
    {
      title: "Code Quiz",
      img: backgroundPortfolio,
      depLink: "https://shale00.github.io/Code-Quiz/",
      gitHubLink: "https://github.com/shale00/Code-Quiz",
      alt: "Screenshot of app",
      description:
        "A quiz to test your knowledge of basic coding in javascript. This app was developed using just HTML, CSS, and Javascript.",
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
    <div className="h-screen flex justify-center items-center"> {/* Center content */}
      <div className="max-w-lg h-[750px] justify-center relative group">
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
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;