import React from "react";
import $ from "jquery";
const ProjectsCard = (props) => {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  return (
    <div
      className="card card-project mt-3"
      data-toggle="tooltip"
      data-placement="bottom"
      title={props.projDescExt && props.projDescExt}
    >
      <img
        className="card-img-top"
        src={props.projImage}
        alt={props.projImageAlt}
      />
      <div className="card-body text-left">
        <a href={props.projLink} target="__blank">
          <h5 className="card-title">{props.projTitle}</h5>
        </a>
        <div className="card-text">{props.projDesc}</div>
      </div>
    </div>
  );
};

export default ProjectsCard;
