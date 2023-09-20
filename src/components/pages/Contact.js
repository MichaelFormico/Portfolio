import React from 'react';
import gmailIcon from '../icons/icons8-gmail-240.png';
import linkIcon from '../icons/icons8-linkedin-240.png';
import gitHubIcon from '../icons/icons8-github-64.png';

const logos = [
  {
    img: gitHubIcon,
    link: "https://github.com/MichaelFormico",
    alt: "GitHub logo",
    text: "GitHub",
  },
  {
    img: linkIcon,
    link: "https://www.linkedin.com/in/michael-formico-880331206/",
    alt: "LinkedIn logo",
    text: "LinkedIn",
  },
  {
    img: gmailIcon,
    link: "mailto:michaelformico@gmail.com",
    alt: "Gmail logo",
    text: "Email",
  },
];

const Contact = () => {
  return (
    <div className="my-8 flex flex-col items-center space-y-3">
      <p className="text-teal font-custom">Check my links below!</p>

      {logos.map((logo, i) => (
        <a key={i} href={logo.link} target="_blank" rel="noopener noreferrer" className="hover:scale-125 icons hover:rounded-lg transition-all ease-in-out flex items-center">
          <img
            className="object-scale-down h-10 w-auto"
            src={logo.img}
            alt={logo.alt}
          />
          <span className="text-teal font-custom ml-2">{logo.text}</span>
        </a>
      ))}
    </div>
  );
}

export default Contact;
