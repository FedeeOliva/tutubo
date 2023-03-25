import React from 'react';
import {Card, Body, Title, Subtitle, Img, Eliminar, Barras} from './style';

const VideoEnLista = ({video, reproducirVideo, eliminarVideo}) => {
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
			data-testid="video-lista"
			>
			<Barras className="fas fa-grip-lines handleDrag" data-testid='dragbars'></Barras>
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
				aria-label='eliminar video de la lista'
				>
				<i className="far fa-times-circle"></i>
			</Eliminar>
		</Card>
			)
}

export default VideoEnLista;