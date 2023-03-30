import { useState, useEffect } from 'react';

export function prettify(str) {

  if (str === undefined || StereoPannerNode === null) {
    return "N/A";
  }
  //Replace all _ with spaces
  str = str.replace(/_/g, ' ');

  //Capitalize the first letter of each word
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return size;
};
