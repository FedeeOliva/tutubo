import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import {Rep} from './style';
import ListaRep from '../ListaRep';
import {RepMinimizado, Maximizar,Title,RepContainer} from './style';
const Reproductor = ({listaRep, setListaRep}) => {

  const[maximizar, setMaximizar] = useState(false);
  const[videoReproduciendo, setReproducirVideo] = useState(null);
  const[mostrarReproductor, setmostrarReproductor] = useState(false);
  const hide = {display: 'none'}

  useEffect(()=>{
    if(videoReproduciendo){
      setmostrarReproductor(true);
    } else{
      setmostrarReproductor(false);
    }
  },[videoReproduciendo]);

  const siguienteVideo = () =>{
    const indexActual = listaRep.indexOf(videoReproduciendo);
    setReproducirVideo(listaRep[indexActual+1]);
  }

  return (
    mostrarReproductor ? 
    <>
      <Rep style={ maximizar? null : hide}>
        <RepContainer>
        	<ReactPlayer
        		url={`https://www.youtube.com/watch?v=${videoReproduciendo.id.videoId}`}
        		controls={true}
        		width="100%"
            height='100%'
        		style={{position: 'absolute', zIndex: 100, top: 0, left: 0 }}
            onEnded = {siguienteVideo}
        	/>
        </RepContainer>
      	<ListaRep
          setMaximizar={setMaximizar}
          setReproducirVideo = {setReproducirVideo}
          setListaRep = {setListaRep}
          listaRep = {listaRep}
        />
     	</Rep>           
      <RepMinimizado style={ maximizar? hide : null}>
        <Title>Reproduciendo 2/24...</Title>
        <Maximizar
          onClick={ () => setMaximizar(true)}
          >
            <i className="fas fa-arrow-up"></i>
          </Maximizar>
      </RepMinimizado>
    </>
    : null
  )
}

export default Reproductor;