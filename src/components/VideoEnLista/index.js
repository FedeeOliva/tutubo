import React, {useContext} from 'react';
import {ReproductorContext} from '../../context/ReproductorContext';
import {Card, Body, Title, Subtitle, Img, Eliminar, Barras} from './style';

const VideoEnLista = ({video}) => {
	const {reproducirVideo, eliminarVideo} = useContext(ReproductorContext);

	const {title, channelTitle, thumbnails} = video.snippet;	

	const handleEliminar = e =>{
		e.stopPropagation();
		eliminarVideo(video);
	}
	const handleDragStart = e => {
		e.dataTransfer.setData("text", video.id.videoId);
		e.currentTarget.style.opacity = '0.5';		
	}

	const handleDragEnd = e => {
		e.currentTarget.style.opacity = '1';
 	}
	return (
		<Card
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}			
			onClick={() => reproducirVideo(video)}
			>
			<Barras className="fas fa-bars handleDrag"></Barras>
			<Img src={thumbnails.default.url}
				alt={title}
			/>
			<Body>
				<Title>{title}</Title>
				<Subtitle>
					{channelTitle}
				</Subtitle>
				<Subtitle>
				</Subtitle>
			</Body>
			<Eliminar
				onClick = {handleEliminar}
				>
				<i className="far fa-times-circle"></i>
			</Eliminar>
		</Card>
			)
}

export default VideoEnLista;