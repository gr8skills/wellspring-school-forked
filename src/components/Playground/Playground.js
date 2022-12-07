import React, { useState } from "react";

export const Playground = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="testimonials__quote__text">
      {isReadMore ? text.slice(0, 150) : text}
      // condition that will render 'read more' only if the text.length is
      greated than 150 chars
      {text.length > 150 && (
        <span onClick={toggleReadMore}>
          {isReadMore ? "...read more" : " ...show less"}
        </span>
      )}
    </p>
  );
};

