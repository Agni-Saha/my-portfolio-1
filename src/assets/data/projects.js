import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import DoctorsVerseImg from '../images/doctorsverse.png';
import FaceRecogImg from '../images/face-recognition.png';
import NetflixImg from '../images/netflix-clone.png';
import WeatherApp from "../images/weather-app.png"

const projects = [
  {
    id: uuidv4(),
    name: 'DoctorsVerse',
    desc:
      `(Group Project) A website that allows user to book any doctor from any hospital in their area,
      using React.js in frontend, node.js and express in backend, and MySQL as database`,
    img: DoctorsVerseImg,
  },
  {
    id: uuidv4(),
    name: 'Face Recognition',
    desc:
      `A website that finds human faces in any image link provided. Using machine learning from Clarifai API, it is 
      created using react.js in frontend, node.js in backend and PostgreSQL as database`,
    img: FaceRecogImg,
  },
  {
    id: uuidv4(),
    name: 'Netflix Clone',
    desc:
      `A netflix clone website, created totally by me, using react.js and Firebase Database and 
       authenication along with Stripe payment checkout`,
    img: NetflixImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      `A simple single-page weather app using React.js`,
    img: WeatherApp,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
