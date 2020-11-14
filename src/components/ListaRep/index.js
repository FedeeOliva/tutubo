import React, {useContext} from 'react';
import {ReproductorContext} from '../../context/ReproductorContext';
import VideoEnLista from '../VideoEnLista';
import {ListaReproduccion,Title, Minimizar,Head} from './style';
import { ReactSortable } from "react-sortablejs";

const ListaRep = ({setMaximizar}) => {

    const {listaRep, setListaRep} = useContext(ReproductorContext);    
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
         <ReactSortable tag="ul" list={listaRep} setList={setListaRep} > 
        	{listaRep.map( video => (
        		<VideoEnLista as='li'
        			key={video.id.videoId}
        			video = {video}
        		/>
        	))}
         </ReactSortable>
    	   	
    </ListaReproduccion>
  )
}

export default ListaRep;