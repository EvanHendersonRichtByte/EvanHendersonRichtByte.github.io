import React from "react";

const BlockQuote = (props) => {
  return (
    <blockquote className="blockquote text-center text-white">
      {/* Photo by Pixabay: https://www.pexels.com/photo/sea-near-moutains-and-tress-during-night-time-57705/ */}
      <p className="mb-0">{props.quote}</p>
      <footer className="blockquote-footer text-white-50">
        {props.author}
      </footer>
    </blockquote>
  );
};

export default BlockQuote;
