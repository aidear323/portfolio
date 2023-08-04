import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.url && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.url}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-link" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      {socialLinks.skype && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.skype}
          target="_blank"
          rel="noopener"
          aria-label="Skype"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-skype" />
          </span>
        </Button>
      )}
      {socialLinks.telegram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener"
          aria-label="telegram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-telegram" />
          </span>
        </Button>
      )}
      {socialLinks.whatsapp && (
        <Button
          className="btn-icon-only rounded-circle"
          color="facebook"
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener"
          aria-label="Whatsapp"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-whatsapp" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
