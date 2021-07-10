import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    /* align-items: center; */
    gap: 20rem;
    justify-content: space-evenly;
    margin-top: 4rem;
    margin-left: 5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 6rem 0;
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I do unique UI/UX design for the website."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I also develop the websites with high performance and blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develop mobile application with eye catching UI. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
