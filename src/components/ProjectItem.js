import React from 'react';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    width: 100%;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({img, link, title, desc}) {
    return (
        <ProjectItemStyles>
            <a target="_blank" rel="noreferrer" href={link} className="projectItem__img">
                <img src={img} alt="project img" />
            </a>
            <div className="projectItem__info">
                <a href={link} target="_blank" rel="noreferrer">
                    <h3 className="projectItem__title">{title}</h3>
                </a>
                <p className="projectItem__desc">{desc}</p>
            </div>
        </ProjectItemStyles>
    );
}
