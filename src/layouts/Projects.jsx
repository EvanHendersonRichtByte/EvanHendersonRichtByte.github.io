import React, { useState, Fragment } from "react";
import ProjectsCard from "../components/ProjectsCard";
import Report from "../assets/img/report.jpg";
import LibraryImg from "../assets/img/library.jpg";
import EcommerceImg from "../assets/img/ecommerce.jpg";
import CarRentalImg from "../assets/img/carrental.jpg";
import Management from "../assets/img/management.jpg";
import Scrapper from "../assets/img/scraps.jpg";
import { Waypoint } from "react-waypoint";
import styled, { keyframes } from "styled-components";
import {
  slideInRight,
  slideInLeft,
  fadeInUp,
  slideInDown,
} from "react-animations";

const Projects = () => {
  const [cardTrigger, setCardTrigger] = useState("");
  const handleWaypointEnter = () => {
    setCardTrigger("yes");
  };
  const ProjAnimR = keyframes`${slideInRight}`;
  const ProjectsAnimR = styled.div`
    animation: 1.5s ${ProjAnimR};
  `;
  const ProjAnimL = keyframes`${slideInLeft}`;
  const ProjectsAnimL = styled.div`
    animation: 1.5s ${ProjAnimL};
  `;
  const ProjAnimD = keyframes`${slideInDown}`;
  const ProjectsAnimD = styled.div`
    animation: 1.5s ${ProjAnimD};
  `;
  const ProjAnimC = keyframes`${fadeInUp}`;
  const ProjectsAnimC = styled.div`
    animation: 1.5s ${ProjAnimC};
  `;
  return (
    <section id="section-projects" className="section-projects container mt-4">
      <Waypoint onEnter={handleWaypointEnter} />
      <h3 className="text-center text-main">Projects</h3>
      <hr className="border-main" />
      <div className="card-columns text-center">
        {cardTrigger === "yes" && (
          <Fragment>
            <ProjectsAnimL>
              <ProjectsCard
                projImage={Report}
                projTitle="Report It"
                projImageAlt="Service"
                projDesc="A Public Complaint Reporting Application"
                projDescExt="Photo by AbsolutVision on Unsplash"
                projLink="https://github.com/EvanHendersonRichtByte/report-it"
              />
            </ProjectsAnimL>
            <ProjectsAnimL>
              <ProjectsCard
                projImage={Scrapper}
                projTitle="Web Scrapper"
                projImageAlt="Tools"
                projDesc="EzScrap is a web scraper tool to help you to get data from a specific website"
                projDescExt="Photo by Pixabay"
                projLink="https://github.com/EvanHendersonRichtByte/ezScrap"
              />
            </ProjectsAnimL>
            <ProjectsAnimD>
              <ProjectsCard
                projImage={LibraryImg}
                projTitle="ReactJS Library Web"
                projImageAlt="Library"
                projDesc="Find your favorite book just with a simple click!"
                projDescExt="Photo by Janko Ferlic"
                projLink="https://github.com/EvanHendersonRichtByte/reactjs-library-web"
              />
            </ProjectsAnimD>
            <ProjectsAnimC>
              <ProjectsCard
                projImage={EcommerceImg}
                projTitle="Ecommerce"
                projImageAlt="Ecommerce"
                projDesc="Ecommerce web app using MERN stack development"
                projDescExt="Photo by Andrea Piacquadio"
                projLink="https://github.com/EvanHendersonRichtByte/ecommerce-mern"
              />
            </ProjectsAnimC>
            <ProjectsAnimR>
              <ProjectsCard
                projImage={Management}
                projTitle="Laravel Admin Service"
                projImageAlt="Laravel Admin Service"
                projDesc="Employee Management using Laravel Framework"
                projDescExt="Photo by Evangeline Shaw on Unsplash"
                projLink="https://github.com/EvanHendersonRichtByte/laravel-admin-service"
              />
            </ProjectsAnimR>
            {/* <a href="https://www.flaticon.com/free-icons/scrap" title="scrap icons">Scrap icons created by Freepik - Flaticon</a> */}
            <ProjectsAnimR>
              <ProjectsCard
                projImage={CarRentalImg}
                projTitle="Keep it Simple Rental Online"
                projImageAlt="Keep it Simple Rental Online"
                projDesc="Rent the car of your dreams with just a short transaction!"
                projDescExt="Photo by Pixabay"
                projLink="https://github.com/EvanHendersonRichtByte/keep-it-simple-rental-online"
              />
            </ProjectsAnimR>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Projects;
