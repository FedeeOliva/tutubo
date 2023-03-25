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

    const indexActual = listaReproduccion.findIndex(el => el.id.videoId === videoEnReproduccion.id.videoId)
    const longitudLista = listaReproduccion.length
   
  useEffect(()=>{
    if(window.matchMedia("(min-width: 62em)").matches){
      setMaximizar(true);      
    }
  },[]);

  return (    
    <>
      <Rep style={ maximizar? null : {display: 'none'}}>
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
      <RepMinimizado style={ maximizar? {display: 'none'} : null}>
        <Title>Reproduciendo {indexActual+1}/{longitudLista}...</Title>
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
