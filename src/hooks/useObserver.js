import {useState, useRef, useEffect} from 'react';

const useObserver = (options = {}) => {
  	
  	const [isNearScreen, setNearScreen] = useState(false);
  	const visor = useRef();

  	useEffect(()=>{
        if(!visor.current) return;

        const onChange = (entries, observer) => {
		    const el = entries[0]
		    if (el.isIntersecting) setNearScreen(true)
		   	else setNearScreen(false);
		}

		const observer = new IntersectionObserver(onChange, options);

        observer.observe(visor.current); 

    },[]); 

  return [isNearScreen, visor];
}

export default useObserver;