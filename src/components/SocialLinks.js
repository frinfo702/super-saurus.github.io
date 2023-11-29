import React from 'react';
import githubIcon from '../images/github-icon-1.svg';
import linkedinIcon from '../images/linkedin-icon-2.svg';
import twitterIcon from '../images/logo_metaX-2.svg';
import scrapboxIcon from '../images/S-icon.svg';
import '../App.css';


function SocialLinks() {
    return (
      <div className="social-links">
        <a href="https://github.com/super-saurus" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github" />
        </a>
        
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://scrapbox.io/kenichiro-memo/" target="_blank" rel="noopener noreferrer">
          <img src={scrapboxIcon} alt="scrapbox" />
        </a>
        
      </div>
    );
  }
export default SocialLinks;  