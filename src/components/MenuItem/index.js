import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LinkArea, LinkIcon } from "./styled";

export default ({ icon, link, title }) => {
  const history = useHistory();
  const location = useLocation();

  const handleLinkClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <LinkArea
      data-tip={title}
      data-for="tip-right"
      active={location.pathname === link}
      href={link}
      onClick={handleLinkClick}
    >
      <LinkIcon src={icon} />
    </LinkArea>
  );
};
