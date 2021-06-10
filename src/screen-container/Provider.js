import React, {createContext, useContext, useEffect, useState} from 'react';

const viewScreenContext  = createContext({});


export  const ViewScreenProvider = ({children}) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    //console.log('resize effect called::');
    window.addEventListener('resize', handleResize);

    return () => {
      //console.log('lisiner remove');
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    // console.log(window.innerWidth);

  }

  return (
    <viewScreenContext.Provider value={{width}}>
      {children}
    </viewScreenContext.Provider>
  )

};

export const useViewScreen  = () => {
  const { width } = useContext(viewScreenContext);
  return {width};
};