import React, {useEffect, useState} from 'react';


export default function ResizedScreen({style}) {

  const [resized, setResized] = useState(false);
  // const [butonClicked, setButonClicked] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(false);

  useEffect(() => {
    console.log('effect::');
    return () => {
      console.log('component unmounted::')
    }
  }, []);

  useEffect(() => {
    console.log('resize effect called::');
    window.addEventListener('resize', handleResize);

    return () => {
      console.log('lisiner remove');
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
    console.log(window.innerWidth);

  }


  console.log("render:::");

  return (
    <div style={style}>
      {windowInnerWidth > 1024 ? <span>Desktop Version</span> : <span>Mobile Version</span>
      }
      <button onClick={()=> setResized(!resized)}></button>
      {/* <button onClick={()=> setButonClicked(!butonClicked)}>Clicked</button> */}
    </div>
  )
}



//const [ isResizedTrackerOpen, setResizedTrackerOpen] = useState(true);
//<ResizedTracker />
//       <button onClick={()=> setResizedTrackerOpen(!isResizedTrackerOpen)}>{isResizedTrackerOpen ? 'Hide' : 'Show'}</button>
//       {isResizedTrackerOpen && <ResizedTracker />}