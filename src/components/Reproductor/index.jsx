import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import {Rep} from './style';
import ListaRep from '../ListaRep';
import {RepMinimizado, Maximizar,Title,RepContainer} from './style';


const Reproductor = ({reproductorData}) => {

  const {videoEnReproduccion,
        listaReproduccion,
        siguienteVideo,
        setListaReproduccion,
        eliminarVideo,
        reproducirVideo} = reproductorData

  const[maximizar, setMaximizar] = useState(false);
  const[infoReproductor, setInfoReproductor] = useState({
    longitudLista: 0,
    indexActual: 0 
  });

  const{longitudLista, indexActual} = infoReproductor;
  const hide = {display: 'none'}

  useEffect(()=>{
    const actual = listaReproduccion.findIndex(el => el.id.videoId === videoEnReproduccion.id.videoId);
    setInfoReproductor({
      longitudLista: listaReproduccion.length,
      indexActual: (actual+1)
    });
  }, [listaReproduccion, videoEnReproduccion]);
  
  useEffect(()=>{
    if(window.matchMedia("(min-width: 62em)").matches){
      setMaximizar(true);      
    }
  },[]);

  //if(!videoEnRep) return null;

  return (    
    <>
      <Rep style={ maximizar? null : hide}>
        {videoEnReproduccion?
        <RepContainer>
        	<ReactPlayer
        		url={`https://www.youtube.com/watch?v=${videoEnReproduccion.id.videoId}`}
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
          listaReproduccion={listaReproduccion}
          setListaReproduccion={setListaReproduccion}
          eliminarVideo={eliminarVideo}
          reproducirVideo={reproducirVideo}
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
