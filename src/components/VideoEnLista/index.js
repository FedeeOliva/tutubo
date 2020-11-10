import React from 'react';
import {Card, Body, Title, Subtitle, Img, Eliminar} from './style';

const VideoEnLista = ({video, setReproducirVideo, setListaRep}) => {
	const {title, channelTitle, thumbnails} = video.snippet;

	const reproducirVideo = () =>{
		setReproducirVideo(video);
	}

	const eliminarVideo = e =>{
		e.stopPropagation();
		setListaRep(videos => [...videos.filter(el => el !== video)]);
	}
 	
	return (
		<Card
			onClick = {reproducirVideo}
			>
			<Img src={thumbnails.default.url}/>
			<Body>
				<Title>{title}</Title>
				<Subtitle>
					{channelTitle}
				</Subtitle>
				<Subtitle>
				</Subtitle>
			</Body>
			<Eliminar
				onClick = {eliminarVideo}
				>
				<i className="far fa-times-circle"></i>
			</Eliminar>
		</Card>
			)
}

export default VideoEnLista;