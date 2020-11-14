import React, {useState} from 'react';
import Reproductor from '../Reproductor';
import Navbar from '../Navbar';
import ListadoVideos from '../ListadoVideos';
import {Grid,ContainerMain} from './style';

const Page = (props) => {

	const [keyword, setKeyword] = useState("");

  return (
    <Grid>        
        <Navbar
        	setKeyword={setKeyword}
        />
        <ContainerMain as="main">
        	<ListadoVideos
        		keyword={keyword}
        	/>
        	<Reproductor/>    	
        </ContainerMain>
    </Grid>
  )
}

export default Page;