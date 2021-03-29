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
            <Title>Lista de Reproduccion</Title> 	
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
            > 
        	{listaReproduccion.map( video => (
        		<VideoEnLista as='li'
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