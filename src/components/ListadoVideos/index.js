import React, {useEffect, useCallback} from 'react';
import {ContenedorVideos, SpinnerCentered,Alert} from './style';
import Video from '../Video';
import useVideos from '../../hooks/useVideos';
import useObserver from '../../hooks/useObserver';
import debounce from 'just-debounce-it';
import Spinner from '../Spinner';

const ListadoVideos = ({keyword, setListaRep}) => {
    
    const [videos, setPage, isLoading , nextToken] = useVideos(keyword);
    // eslint-disable-next-line
    const debounceNextPage = useCallback( debounce( () =>{
        console.log('nextPageDebounce')
        setPage(prev => prev+1); 
   
    } ,200),[setPage]);

    const options = {        
        rootMargin: '10px',      
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
    	{videos.map(video => (                   
        <Video
            key = {video.id.videoId}                       	
            video = {video}
            setListaRep = {setListaRep}
        />  
                     
        ))}      
        <div ref={visor}></div>
         {!nextToken && !isLoading &&
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
    </ContenedorVideos>
       
    </>
  )
}

export default ListadoVideos;