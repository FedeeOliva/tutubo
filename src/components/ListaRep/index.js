import React from 'react';
import VideoEnLista from '../VideoEnLista';
import {ListaReproduccion,Title, Minimizar,Head} from './style';
import { ReactSortable } from "react-sortablejs";

const ListaRep = (props) => {

    const {setMaximizar,
        listaReproduccion,
        setListaReproduccion,
        eliminarVideo,
        reproducirVideo} = props;
  return (
    <ListaReproduccion
        >
        <Head>
            <Title data-testid="titulo-reproductor">Lista de Reproduccion</Title> 	
            <Minimizar
                onClick={() => setMaximizar(false)}
                >
                <i className="fas fa-arrow-down"></i>
            </Minimizar>
        </Head>   

         <ReactSortable 
            tag="ul" list={listaReproduccion} 
            setList={setListaReproduccion} 
            handle='.handleDrag'
            data-testid="lista-reproduccion"
            > 
        	{listaReproduccion.map( video => (
        		<VideoEnLista as='li'
                    //data-testid="video-lista"
        			key={video.id.videoId}
        			video = {video}
                    eliminarVideo={eliminarVideo}
                    reproducirVideo={reproducirVideo}
                   
        		/>
        	))}
         </ReactSortable>
    	   	
    </ListaReproduccion>
  )
}

export default ListaRep;