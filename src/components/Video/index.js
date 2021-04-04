import React from 'react';
import * as Card from './style.js';
import moment from 'moment';

const Video = ({video,agregarALista}) => {

	const {title, channelTitle, thumbnails} = video.snippet;
	const fecha = moment(video.snippet.publishTime).fromNow();	


	return (
			<Card.Contenedor
				  onClick = {() => agregarALista(video)}
				  data-testid='video-card' 
				>
				<Card.Img src={thumbnails.medium.url}
					alt={title}
					draggable="false"
				/>		
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Subtitle>{channelTitle}</Card.Subtitle>
					<Card.Subtitle>{fecha}</Card.Subtitle>	
				</Card.Body>
			</Card.Contenedor>
		
		
		)
}

export default Video;