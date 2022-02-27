import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/arthurlaroya"><BsTwitter /></a>
      </div>
      <div>
        <a href="https://github.com/ajlaroya"><BsGithub /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/arthurlaroya/"><BsLinkedin /></a>
      </div>
    </div>
  );
};

export default SocialMedia;
