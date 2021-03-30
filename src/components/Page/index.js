import React, {useState} from 'react';
import Reproductor from '../Reproductor';
import Navbar from '../Navbar';
import ListadoVideos from '../ListadoVideos';
import {Grid,ContainerMain} from './style';
import useReproductor from '../../hooks/useReproductor';

const Page = ({setTheme}) => {

	const [keyword, setKeyword] = useState("");
    const reproductorData = useReproductor();

    const {agregarALista} = reproductorData;

  return (
    <Grid>        
        <Navbar
        	setKeyword={setKeyword}
            setTheme={setTheme}
        />
        <ContainerMain as="main">
        	<ListadoVideos
        		keyword={keyword}
                agregarALista={agregarALista}
        	/>
        	<Reproductor
                reproductorData={reproductorData}
            />    	
        </ContainerMain>
    </Grid>
  )
}

export default Page;