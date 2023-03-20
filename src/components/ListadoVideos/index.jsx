import React, {useEffect, useCallback} from 'react';
import {ContenedorVideos, SpinnerCentered, Info, Alert} from './style';
import Video from '../Video';
import useVideos from '../../hooks/useVideos';
import useObserver from '../../hooks/useObserver';
import debounce from 'just-debounce-it';
import Spinner from '../Spinner';

const ListadoVideos = ({keyword, agregarALista}) => {
    
    const {videos, getNextPage, isLoading , thereIsNextPage, error} = useVideos(keyword);
    // eslint-disable-next-line
    const debounceNextPage = useCallback( debounce( () =>{
        getNextPage();    
    } ,200),[getNextPage]);

    const options = {        
        rootMargin: '100px',      
    }
    const [isNearScreen, visor] = useObserver(options);  

    
    useEffect(() =>{
        if(isNearScreen){
           debounceNextPage();
        }
    },[debounceNextPage,isNearScreen]);    

  return (
    <>
    <ContenedorVideos>
    	{videos && videos.map(video => (                   
        <Video
            key = {video.id.videoId}                       	
            video = {video}
            agregarALista = {agregarALista}
        />  
                     
        ))}
        <Info>     
        <div style={{height: '10px', width:'100px'}} ref={visor}></div>
        {error &&
            <Alert>
                <span>
                   Se ha excedido el numero de peticiones diarias para esta aplicación                   
                </span>
            </Alert>
            }
         {!thereIsNextPage && !isLoading &&
            <Alert>
                <span>
                    Debe Realizar una busqueda para obtener mas resultados                   
                </span>
            </Alert>
        }

        {isLoading &&
            <SpinnerCentered>
                <Spinner/>
            </SpinnerCentered>      
        }
        </Info>          
    </ContenedorVideos>
       
    </>
  )
}

export default ListadoVideos;