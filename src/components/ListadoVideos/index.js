import React, {useEffect, useCallback} from 'react';
import {ContenedorVideos} from './style';
import Video from '../Video';
import useVideos from '../../hooks/useVideos';
import useObserver from '../../hooks/useObserver';
import debounce from 'just-debounce-it';

const ListadoVideos = ({keyword, setListaRep}) => {
    
    const [videos, nextPage] = useVideos(keyword);
    // eslint-disable-next-line
    const debounceNextPage = useCallback( debounce( () =>{
        nextPage(prev => prev+1); 
   
    } ,200),[nextPage]);

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
    </ContenedorVideos>
   
    
    </>
  )
}

export default ListadoVideos;