import React from "react";
import "./Resume.css"; // Import your CSS styles if needed
import htmlIcon from "../icons/icons8-html-48.png";
import cssIcon from "../icons/icons8-css-100.png";
import javaScriptIcon from "../icons/icons8-javascript-48.png";
import mysqlIcon from "../icons/icons8-mysql-24.png";
import mongoDbIcon from "../icons/icons8-mongodb-48.png";
import mongooseIcon from "../icons/icons8-mongoose-48.png";
import gitIcon from "../icons/icons8-git-48.png";
import gitHubIcon from "../icons/icons8-github-64.png";
import gitLabIcon from "../icons/icons8-gitlab-48.png";
import vsCodeIcon from "../icons/icons8-visual-studio-48.png";
import reactIcon from "../icons/icons8-react-80.png";
import tailwindIcon from "../icons/icons8-tailwind-css-100.png";
import bootstrapIcon from "../icons/icons8-bootstrap-48.png";
import jqueryIcon from "../icons/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-24.png";
import restApiIcon from "../icons/icons8-rest-api-48.png";
import expressJsIcon from "../icons/icons8-express-js-64.png";
import herokuIcon from "../icons/icons8-heroku-64.png";
import npmIcon from "../icons/icons8-npm-48.png";
import nodeIcon from "../icons/icons8-node-js-48.png";
import downloadIcon from "../icons/downloadIcon.png";

const Resume = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={htmlIcon} alt="HTML Icon" />
        <img src={cssIcon} alt="CSS Icon" />
        <img src={javaScriptIcon} alt="JavaScript Icon" />
        <img src={mysqlIcon} alt="MySQL Icon" />
        <img src={mongoDbIcon} alt="MongoDB Icon" />
        <img src={mongooseIcon} alt="Mongoose Icon" />
        <img src={gitIcon} alt="Git Icon" />
        <img src={gitHubIcon} alt="GitHub Icon" />
        <img src={gitLabIcon} alt="GitLab Icon" />
        <img src={vsCodeIcon} alt="Visual Studio Code Icon" />
        <img src={reactIcon} alt="React Icon" />
        <img src={tailwindIcon} alt="Tailwind CSS Icon" />
        <img src={bootstrapIcon} alt="Bootstrap Icon" />
        <img src={jqueryIcon} alt="jQuery Icon" />
        <img src={restApiIcon} alt="REST API Icon" />
        <img src={expressJsIcon} alt="Express.js Icon" />
        <img src={herokuIcon} alt="Heroku Icon" />
        <img src={npmIcon} alt="npm Icon" />
        <img src={nodeIcon} alt="Node.js Icon" />
      </div>

      <div className="logos-slide">
        <img src={htmlIcon} alt="HTML Icon" />
        <img src={cssIcon} alt="CSS Icon" />
        <img src={javaScriptIcon} alt="JavaScript Icon" />
        <img src={mysqlIcon} alt="MySQL Icon" />
        <img src={mongoDbIcon} alt="MongoDB Icon" />
        <img src={mongooseIcon} alt="Mongoose Icon" />
        <img src={gitIcon} alt="Git Icon" />
        <img src={gitHubIcon} alt="GitHub Icon" />
        <img src={gitLabIcon} alt="GitLab Icon" />
        <img src={vsCodeIcon} alt="Visual Studio Code Icon" />
        <img src={reactIcon} alt="React Icon" />
        <img src={tailwindIcon} alt="Tailwind CSS Icon" />
        <img src={bootstrapIcon} alt="Bootstrap Icon" />
        <img src={jqueryIcon} alt="jQuery Icon" />
        <img src={restApiIcon} alt="REST API Icon" />
        <img src={expressJsIcon} alt="Express.js Icon" />
        <img src={herokuIcon} alt="Heroku Icon" />
        <img src={npmIcon} alt="npm Icon" />
        <img src={nodeIcon} alt="Node.js Icon" />
      </div>
      <div className="flex justify-center items-center mt-4 pt-20">
        <img src={downloadIcon} alt="Download Icon" className="w-6 h-6 mr-2" />
        <span className="text-lg text-teal font-custom">Resume Download</span>
      </div>
    </div>
  );
};

export default Resume;
