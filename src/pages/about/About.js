import { useState } from "react";
import PhilosophyComponent from "../../components/about/Philosophy";
import Story from "../../components/about/Story";
import StaffData from "./Staff/Staff";
import ResizedScreen from "../../screen-container/Resize";
import "./AboutStyle.css";


export default function About() {
  //const [ isResizedScreenOpen, setResizedScreenOpen] = useState(true);

  return (
    <div className="wrapper">
      <Story />
      <PhilosophyComponent />
      <div className="wallpaper"></div>
      <StaffData />
    </div>
  );
}