import React, {useState, useEffect, createContext} from 'react';

export const ReproductorContext = createContext();

const ReproductorProvider = (props) =>{

	const[videoEnRep, setVideoEnRep] = useState(false);
	const[listaRep, setListaRep] = useState([]);

	useEffect(()=>{
		if(listaRep.length === 0){
			setVideoEnRep(false);
		}
	},[listaRep]);

	const agregarALista = video =>{
		if(!videoEnRep) reproducirVideo(video);
		if(!listaRep.find(el => el.id.videoId === video.id.videoId)){
			setListaRep([...listaRep, video]);
		}		
	}

	const siguienteVideo = () =>{
		const indexActual = listaRep.findIndex(el => el.id.videoId === videoEnRep.id.videoId);
		if(listaRep[indexActual+1]){
			setVideoEnRep(listaRep[indexActual+1]);
		}else{
			setVideoEnRep(listaRep[0]);
		}
	}
	const reproducirVideo = video =>{
		setVideoEnRep(video);
	}

	const eliminarVideo = async video =>{
		if(videoEnRep.id.videoId === video.id.videoId){
			await siguienteVideo();		
		}
		setListaRep([...listaRep.filter(el => el !== video)]);
	}

	return(
		<ReproductorContext.Provider
			value={{
				videoEnRep: videoEnRep,
				listaRep: listaRep,
				agregarALista,
				reproducirVideo,
				eliminarVideo,
				siguienteVideo,
				setListaRep
			}}
		>
			{props.children}
		</ReproductorContext.Provider>
	);
}

export default ReproductorProvider;