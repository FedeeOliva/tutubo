import React, {useContext} from 'react';
import {ReproductorContext} from '../../context/ReproductorContext';
import {Card, Body, Title, Subtitle, Img, Eliminar} from './style';

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
			onClick = {() => reproducirVideo(video)}
			onDragStart = {handleDragStart}
			onDragEnd = {handleDragEnd}
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
				onClick = {handleEliminar}
				>
				<i className="far fa-times-circle"></i>
			</Eliminar>
		</Card>
			)
}

export default VideoEnLista;