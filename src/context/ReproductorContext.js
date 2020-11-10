import React, {createContext, useState, useEffect} from 'react';

export const ReproductorContext = createContext();

const ReproductorProvider = (props) =>{

	const[videoEnRep, setVideoEnRep] = useState(null);
	const[listaRep, setListaRep] = useState([]);

	const agregarALista = video =>{
		if(!listaRep.includes(video)){
			setListaRep([...listaRep, video]);
		}		
	}

	const siguienteVideo = () =>{

	}
	const reproducirVideo = video =>{
		setVideoEnRep(video);
	}

	const eliminarVideo = () =>{

	}

	return(
		<ReproductorContext.Provider
			value={{
				videoEnRep,
				listaRep,
			}}
		>
			{props.children}
		</ReproductorContext.Provider>
	);
}

export default RecetasProvider;