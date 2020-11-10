import React from 'react';
/*import {Card, CardBody} from './style';*/
import * as Card from './style.js';
import moment from 'moment';

const Video = ({video, setListaRep}) => {

	const {title, channelTitle, thumbnails} = video.snippet;
	const fecha = moment(video.snippet.publishTime).fromNow();	


	return (
			<Card.Contenedor
				onClick = {() => agregarALista(video)}   
				>
				<Card.Img src={thumbnails.default.url}
					alt=""
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