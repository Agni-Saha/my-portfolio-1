import { v4 as uuidv4 } from 'uuid';
import DoctorsVerseImg from '../images/doctorsverse.png';
import FaceRecogImg from '../images/face-recognition.png';
import NetflixImg from '../images/netflix-clone.png';
import WeatherApp from "../images/weather-app.png"
import TodoList from "../images/TodoList-MERN.png"
import Whatsapp from "../images/whatsapp-clone.png"

const projects = [
  {
    id: uuidv4(),
    name: 'DoctorsVerse',
    desc:
      `(Group Project) A website that allows user to book any doctor from any hospital in their area,
      using React.js in frontend, node.js and express in backend, and MySQL as database`,
    img: DoctorsVerseImg,
    link: "https://doctorsverse-frontend.herokuapp.com/"
  },
  {
    id: uuidv4(),
    name: 'Face Recognition',
    desc:
      `A website that finds human faces in any image provided. Using machine learning from Clarifai API, it is 
       created using react.js in frontend, node.js in backend and PostgreSQL as database`,
    img: FaceRecogImg,
    link: "https://face-recognition-frontend-3375.herokuapp.com/"
  },
  {
    id: uuidv4(),
    name: 'Netflix Clone',
    desc:
      `A netflix clone website, using react.js and Firebase Firestore Database and 
       Authenication along with Stripe payment checkout feature`,
    img: NetflixImg,
    link: "https://netflix-clone-by-agni.herokuapp.com/"
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      `A simple single-page weather app using React.js and openweathermap API`,
    img: WeatherApp,
    link: "https://weather-app-reactjs3375.herokuapp.com/"
  },
  {
    id: uuidv4(),
    name: 'Todo List App',
    desc:
      `A To-do List app, implementing CRUD operations using MERN stack, with hosting 
       react.js, node.js & express.js on Heroku, and the Mongo Database on
       Mongo Cloud Atlas`,
    img: TodoList,
    link: "https://todolist-frontend-mern-crud.herokuapp.com/"
  },
  {
    id: uuidv4(),
    name: 'Whatsapp Clone',
    desc:
      `A One-to-One chatting website similar to Whatsapp using Next.js and Firebase Firestore and
       Google Authentication`,
    img: Whatsapp,
    link: "https://whatsapp-clone-nextjs.herokuapp.com/"
  }
];

export default projects;
