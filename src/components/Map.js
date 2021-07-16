import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Salt Lake, Kolkata, West Bengal, India</PText>
          <a
            className="map__card__link"
            href="https://www.google.co.in/maps/place/GB-6,+FB+Block,+Sector+III,+Bidhannagar,+Kolkata,+West+Bengal+700106/@22.5785881,88.4071307,19.5z/data=!4m13!1m7!3m6!1s0x3a0275da311b999d:0xabcc036b80f0560!2sGB-6,+FB+Block,+Sector+III,+Bidhannagar,+Kolkata,+West+Bengal+700106!3b1!8m2!3d22.5786694!4d88.4072347!3m4!1s0x3a0275da311b999d:0xabcc036b80f0560!8m2!3d22.5786694!4d88.4072347"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
