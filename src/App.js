import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import {theme} from './config/theme';
import Page from './components/Page';
import ReproductorProvider from './context/ReproductorContext';

function App() {
  return (
	<ThemeProvider theme={theme}>
	    <ReproductorProvider>
	        <Page/>
	    </ReproductorProvider>
	</ThemeProvider>  		
  	
  );
}

export default App;
