import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'JosefinSans Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'JosefinSans Bold';
    font-size: 6rem;
    margin-top: 1.5rem;
    text-transform: uppercase;
    color: var(--yellow);
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
