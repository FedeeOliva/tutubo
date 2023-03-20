import {useState, useEffect} from 'react';

const useReproductor = () => {
  
	const[videoEnReproduccion, setVideoEnReproductor] = useState(false);
	const[listaReproduccion, setListaReproduccion] = useState([]);

	useEffect(()=>{
		if(!listaReproduccion.length){
			setVideoEnReproductor(false);
		}
	},[listaReproduccion]);

	const agregarALista = video =>{
		if(!videoEnReproduccion) reproducirVideo(video);
		// if(!listaReproduccion.find(el => el.id.videoId === video.id.videoId)){
		// 	setListaReproduccion([...listaReproduccion, video]);
		// }	

		/*
		const videosId = listaReproduccion.map( v => v.id.videoId);
		videosId.includes(video.id.videoId)		
		*/
		
		if(!listaReproduccion.includes(video)){
				setListaReproduccion([...listaReproduccion, video]);
			}	
	}

	const siguienteVideo = () =>{
		const indexActual = listaReproduccion.findIndex(el => el.id.videoId === videoEnReproduccion.id.videoId);
		if(listaReproduccion[indexActual+1]){
			setVideoEnReproductor(listaReproduccion[indexActual+1]);
		}else{
			setVideoEnReproductor(listaReproduccion[0]);
		}
	}
	const reproducirVideo = video =>{
		setVideoEnReproductor(video);
	}

	const eliminarVideo = video =>{
		if(videoEnReproduccion.id.videoId === video.id.videoId){
			siguienteVideo();		
		}
		setListaReproduccion([...listaReproduccion.filter(el => el !== video)]);
	}

	return {videoEnReproduccion,
			listaReproduccion,
			agregarALista,
			siguienteVideo,
			reproducirVideo,
			eliminarVideo,
			setListaReproduccion }
}


export default useReproductor;