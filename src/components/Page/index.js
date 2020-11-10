import React, {useState} from 'react';
import Reproductor from '../Reproductor';
import Navbar from '../Navbar';
import ListadoVideos from '../ListadoVideos';
import {Grid,ContainerMain} from './style';

const Page = (props) => {

	const [keyword, setKeyword] = useState("");
    const [listaRep, setListaRep] = useState([]);

  return (
    <Grid>        
        <Navbar
        	setKeyword={setKeyword}
        />
        <ContainerMain>
        	<ListadoVideos
        		keyword={keyword}
                setListaRep={setListaRep}
        	/>
        	<Reproductor
                listaRep={listaRep}
                setListaRep={setListaRep}
            />    	
        </ContainerMain>
    </Grid>
  )
}

export default Page;