import React from 'react';
import VideoEnLista from '../VideoEnLista';
import {ListaReproduccion,Title, Minimizar,Head} from './style';
//import { ReactSortable } from "react-sortablejs";

const ListaRep = (props) => {

    const {setMaximizar, listaRep, setReproducirVideo, setListaRep} = props;
  return (
    <ListaReproduccion
        >
        <Head>
            <Title>Lista de Reproduccion</Title> 	
            <Minimizar
                onClick={() => setMaximizar(false)}
                >
                <i class="fas fa-arrow-down"></i>
            </Minimizar>
        </Head>    
         <div> 
        	{listaRep.map( video => (
        		<VideoEnLista as='li'
        			key={video.id.videoId}
        			video = {video}
                    setReproducirVideo = {setReproducirVideo}
                    setListaRep = {setListaRep}
        		/>
        	))}
         </div>
    	   	
    </ListaReproduccion>
  )
}

export default ListaRep;