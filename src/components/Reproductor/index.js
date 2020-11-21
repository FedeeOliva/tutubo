import React, {useState, useEffect, useContext} from 'react';
import {ReproductorContext} from '../../context/ReproductorContext';
import ReactPlayer from 'react-player';
import {Rep} from './style';
import ListaRep from '../ListaRep';
import {RepMinimizado, Maximizar,Title,RepContainer} from './style';


const Reproductor = (props) => {

  const {videoEnRep,listaRep,siguienteVideo} = useContext(ReproductorContext);
  const[maximizar, setMaximizar] = useState(false);
  const[dataReproductor, setDataReproductor] = useState({
    longitudLista: 0,
    indexActual: 0 
  });
  const{longitudLista, indexActual} = dataReproductor;
  const hide = {display: 'none'}

  useEffect(()=>{
    const actual = listaRep.findIndex(el => el.id.videoId === videoEnRep.id.videoId);
    setDataReproductor({
      longitudLista: listaRep.length,
      indexActual: (actual+1)
    });
  }, [listaRep, videoEnRep]);
  
  useEffect(()=>{
    if(window.matchMedia("(min-width: 62em)").matches){
      setMaximizar(true);      
    }
  },[]);

  //if(!videoEnRep) return null;

  return (    
    <>
      <Rep style={ maximizar? null : hide}>
        {videoEnRep?
        <RepContainer>
        	<ReactPlayer
        		url={`https://www.youtube.com/watch?v=${videoEnRep.id.videoId}`}
        		controls={true}
        		width="100%"
            height='100%'
        		style={{position: 'absolute', zIndex: 100, top: 0, left: 0 }}
            playing={true}
            onEnded={siguienteVideo}
          />
        </RepContainer>
          : null
         }
      	<ListaRep
          setMaximizar={setMaximizar}
        />
     	</Rep>           
      <RepMinimizado style={ maximizar? hide : null}>
        <Title>Reproduciendo {indexActual}/{longitudLista}...</Title>
        <Maximizar
          onClick={ () => setMaximizar(true)}
          >
            <i className="fas fa-arrow-up"></i>
          </Maximizar>
      </RepMinimizado>
    </>    
  )
}

export default Reproductor;
