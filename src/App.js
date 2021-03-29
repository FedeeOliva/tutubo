import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import {theme} from './config/theme';
import Page from './components/Page';

function App() {
  return (
	<ThemeProvider theme={theme}>	    
	    <Page/>	    
	</ThemeProvider>  		
  	
  );
}

export default App;
