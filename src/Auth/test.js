// import firebase from 'firebase'
// import "firebase/auth" 
// import "firebase/firestore";
const firebase= require('firebase')
require('firebase/firestore')
require('firebase/auth')

//import { APP_ID, AUTH_DOMAIN, MEASUREMENT_ID, MSG_SENDER_ID, PROJECT_ID, REACT_APP_API_KEY, STORAGE_BUCKET } from '../env';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: REACT_APP_API_KEY,
//     authDomain: AUTH_DOMAIN,
//     projectId: PROJECT_ID,
//     storageBucket: STORAGE_BUCKET,
//     messagingSenderId: MSG_SENDER_ID,
//     appId: APP_ID,
//     measurementId: MEASUREMENT_ID
//   };
 const REACT_APP_API_KEY= "AIzaSyBCJjOAFE9hFt_ILwB247CJinm8NbcEjvQ";
 const AUTH_DOMAIN="disneyplus-hotstar-clone.firebaseapp.com";
 const PROJECT_ID="disneyplus-hotstar-clone";
 const STORAGE_BUCKET="disneyplus-hotstar-clone.appspot.com";
 const MSG_SENDER_ID="370641058048";
 const APP_ID="1:370641058048:web:b708a6a8f43d5890e4dbe5";
 const MEASUREMENT_ID= "G-SJ9KWSEVQP";
  const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MSG_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);
// export const auth= firebase.auth()
// export default firebase;

const db= firebase.firestore()

let collection=[
  {
    "id":1,
    "title":"The Big Bull",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9649/959649-v",
    "duration":"2 hr 33 min",
    "category":"crime",
    "above_age":"12+",
    "languages":"Hindi",
    "year":"2021",
    "video":"https://youtu.be/Bw6I-KgCSP4",
    "description":"uring the late '80s, Hemant Shah, the man with the Midas touch, pulled off the biggest hustle that shook India's financial fabric. Inspired by true events."
},
{    "id":2,
    "title":"Captain America: Civil War",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5126/675126-v",
    "duration":"2 hr 21 min",
    "category":"Superhero,Action",
    "above_age":"12+",
    "languages":"Hindi,English",
    "year":"2016",
    "video":"https://www.youtube.com/embed/IxxmvrrSSNQ",
    "description":"The government's decision to push a Hero Registration Act to regulate heroes creates a rift among the Avengers and other heroes."
},
{
    "id":3,
    "title":"Mulan",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6660/846660-v",
    "duration":"1 hr 55 min",
    "category":"Action",
    "above_age":"12+",
    "languages":"Hindi,english",
    "video":"https://youtu.be/rabw-DrOF-0",
    "description":"Masquerading as a male soldier to protect her father and tested every step of the way, Mulan must harness her inner-strength and embrace her true potential."
},
{
    "id":4,
    "title":"Bahut Hua Sammaan",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3256/803256-v",
    "duration":"2 hr 5 min",
    "category":"Comedy",
    "above_age":"15+",
    "languages":"Hindi",
    "year":"2020",
    "video":"https://youtu.be/j8LZ8OUpNZ4",
    "description":"Perpetually failing engineering students Bony and Fundoo get talked into robbing a bank by the campus loon. What follows is something neither anticipated."
},
{
    "id":5,
    "title":"Angrezi Medium",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6662/956662-v",
    "duration":"2 hr 25 min",
    "category":"Drama",
    "above_age":"12+",
    "languages":"Hindi",
    "video":"https://youtu.be/rzlfeocUVhI",
    "description":"Champak, a simple Mithai-seller, will go to any lengths to fulfil daughter Tarika's dream of studying in London, triggering a chain of hilarious misadventures."
},
{
    "id":6,
    "title":"Captain America: The First Avenger",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4809/674809-v",
    "duration":"2 hr 2 min",
    "category":"Superhero",
    "above_age":"12+",
    "languages":"Hindi",
    "year":"2021",
    "video":"https://youtu.be/JerVrbLldXw",
    "description":"After being injected with a special Super-Soldier serum which leads to him developing superpowers Steve must thwart the plans of a warmonger."
},
{
    "id":7,
    "title":"Tanhaji",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
    "duration":"2 hr 12 min",
    "category":"Action",
    "above_age":"15+",
    "languages":"Hindi",
    "year":"2020",
    "video":"https://youtu.be/cffAGIYTEHU",
    "description":"As Aurangzeb captures the Kondhana Fort, Tanhaji Malusare, Shivaji Maharaj's trusted military leader and braveheart, ventures out to win it back."
},
{
    "id":8,
    "title":"Laxmii",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7509/827509-v",
    "duration":"2 hr 21 min",
    "category":"Horror,Comedy",
    "above_age":"15+",
    "languages":"Hindi",
    "video":"https://youtu.be/xw0gE8QA1W0",
    "description":"Aasif's belief in logic and science shatters when he gets possessed by a ghost. What starts as a comical journey soon unearths a dark secret."
},
{
    "id":9,
    "title":"Doctor Strange",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v",
    "duration":"1 hr 54 min",
    "category":"Superhero",
    "above_age":"12+",
    "languages":"Hindi,English",
    "year":"2016",
    "video":"https://youtu.be/Lt-U_t2pUHI",
    "description":"Dr. Strange faces a difficult choice of whether to return to his life of luxury or to protect the world as the most powerful sorcerer in existence."
},
{
    "id":10,
    "title":"Pirates of the Caribbean-Salazar's Revenge",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5236/875236-v",
    "duration":"2 hr 9 min",
    "category":"Action",
    "above_age":"12+",
    "languages":"Hindi,English",
    "year":"2017",
    "video":"https://youtu.be/-6StS7p5TdQ",
    "description":"Captain Jack Sparrow senses the winds of ill-fortune when his nemesis Captain Salazar escapes from the Devil's Triangle, to kill every pirate at sea including him."
},
{
    "id":11,
    "title":"Aladdin",
    "card_img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5156/875156-v",
    "duration":"2 hr 10 min",
    "category":"Family",
    "above_age":"6+",
    "languages":"Hindi,English",
    "year":"2019",
    "video":"https://youtu.be/foyufD52aog",
    "description":"In this live-action retelling of 1992 classic, Aladdin and a power-hungry Grand Vizier vie for a magic lamp that can make their deepest wishes come true."
}
]

collection.forEach((item)=>{
  db.collection("Movieslist").add({
     id: item.id,
     title:item.title,
     card_img:item.card_img,
     duration:item.duration,
     category:item.category,
     above_age:item.above_age,
     languages:item.languages,
     year:item.year,
     video:item.video,
     description:item.description
  })
}).then((docRef)=>{
  console.log("document"+docRef.id);
}).catch((err)=>{
  console.log("error"+err);
})