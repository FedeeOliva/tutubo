import React, {useState, useEffect} from 'react';
import {Button} from './style';

const BtnSwitch = ({setTheme}) => {

	const [active, setActive] = useState(true);

	useEffect(() =>
		setTheme(active)
	 ,[active,setTheme]);

  return (
    <Button 
    	onClick={() => setActive(!active)}
    	className={active && 'active'}
    	data-testid='switch-theme'
		aria-label="dark mode"
    	>    	
		<span><i className="fas fa-sun"></i></span>
		<span><i className="fas fa-moon"></i></span>		
    </Button>
  )
}

export default BtnSwitch;