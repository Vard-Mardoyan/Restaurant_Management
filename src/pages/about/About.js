import PhilosophyComponent from "../../components/about/Philosophy";
import Story from "../../components/about/Story";
import './About.css'


export default function About() {

  return (
    <>
    <div className='about-body'>
      <Story />
      <PhilosophyComponent />
      </div>
    </>
  );
}
