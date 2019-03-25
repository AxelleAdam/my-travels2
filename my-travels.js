import React from "react";
import Travel from "./travel";

const data = [
  {
    country:
      "Just a wonderful land, lost in pacific ocean",
    destination: "New Zealand",
    photo:
      "https://i.imgur.com/YIXA5l8.jpg",
  },
  {
    country: "Have you ever seen the red dragon ?",
    destination: "Wales",
    photo:
      "https://wallup.net/wp-content/uploads/2016/01/256762-Wales-UK-landscape-748x468.jpg",
  },
  {
    country: "From Russia with love",
    destination: "Russia",
    photo:
      "https://i.imgur.com/FkSfCCO.jpg",
  },
  {
    country:
      "ô Canadaaaaa.",
    destination: "Canada",
    photo:
      "https://i.imgur.com/SBXTmSb.jpg",
  },
  {
    country:
      "Follow vikings steps",
    destination: "Norway",
    photo:
      "https://i.imgur.com/VozCSwA.jpg",
  }
];


const Travels = () => (
  <div>
    {data.map( (trav) => (
      <Travel destination = {trav.destination} country={trav.country} photo ={trav.photo}/>
    ))}
  </div>
);
export default Travels;
