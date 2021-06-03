import PhilosophyComponent from "../../components/about/Philosophy";
import Story from "../../components/about/Story";
import "./AboutStyle.css";


export default function About() {
  const titleOfStory = 'Our story';
  const titleOfPhilosophy = 'The philosophy of cooking';

  return (
    <div>
      <h3 className="title">{`${titleOfStory.toUpperCase()}`}</h3>
      <Story />
      <h3 className="title"> {`${titleOfPhilosophy.toUpperCase()}`} </h3>
      <PhilosophyComponent />
    </div>
  );
}
