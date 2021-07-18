import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import CVDoc from "../assets/data/CV2.docx"

const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;

    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 2;
    }
    .Download_Btn {
        cursor: pointer;
        margin-top: 2rem;
        font-size: 2.2rem;
        background-color: ${(props) =>
            props.outline ? 'transperant' : 'var(--gray-1)'};
        padding: 0.7em 2em;
        border: 2px solid var(--gray-1);
        border-radius: 8px;
        display: inline-block;
        color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
        transition: all 0.2s ease-in;
    }
    .Download_Btn:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0px 2px 5px 2px var(--yellow);
        font-weight: 600;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
            color: var(--yellow);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1);
        }
    }
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-bottom: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .Download_Btn {
            font-size: 1.8rem;
        }
        .top-section {
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading {
            font-size: 1.8rem;
        }
        .about__heading {
            font-size: 2.8rem;
        }
        .about__info__heading {
            font-size: 3rem;
        }
    }
`;

export default function About() {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <p className="about__subheading">
                                Hi, I am <span>Agni Saha</span>
                            </p>
                            <h2 className="about__heading">A freelance Web developer</h2>
                            <div className="about__info">
                                <PText>
                                    I am from Kolkata, West Bengal, India. A place of beauty and
                                    nature. Since my childhood, I loved art and design. I always
                                    tried to design stuff with my unique point of view. I also
                                    love to create things that can be usefull to others.
                                    <br /> <br />
                                    I started coding since I was in high school. Coding is also an
                                    art for me. I love it and now I also have the opportunity to
                                    design along with the coding. I find it really interesting and
                                    I enjoy the process a lot.
                                    <br />
                                    <br />
                                    My vision is to make the world a better place. Now almost
                                    everything is becoming better than ever. It is time for us to
                                    create more good stuff that helps the world to become a better
                                    place.
                                </PText>
                            </div>
                            <a href={CVDoc} download="CVDoc" target='_blank' rel="noreferrer">
                                <button className="Download_Btn">Download CV</button>
                            </a>
                        </div>
                        <div className="right">
                            <img src={AboutImg} alt="me" />
                        </div>
                    </div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Education</h1>

                            <AboutInfoItem
                                title="School"
                                items={['Kendriya Vidyalaya No. 2, Salt Lake, Kolkata - 106']}
                            />
                            <AboutInfoItem title="Collage" items={['Jadavpur University']} />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">My Skills</h1>

                            <AboutInfoItem
                                title="FrontEnd"
                                items={['HTML/CSS', 'React.js', 'Next.js']}
                            />
                            <AboutInfoItem
                                title="BackEnd"
                                items={['Node', 'Express']}
                            />
                            <AboutInfoItem
                                title="Database"
                                items={['PostgreSQL', 'MongoDB', 'Firebase']}
                            />
                            <AboutInfoItem
                                title="Design"
                                items={['Photoshop', 'Adobe XD']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiences</h1>

                            <AboutInfoItem title="2020-2021" items={['null']} />
                        </div>
                    </div>
                </div>
            </AboutPageStyles>
        </>
    );
}
