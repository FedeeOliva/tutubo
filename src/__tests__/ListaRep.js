import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'emotion-theming';
import {themeDark} from '../config/theme';
import ListaRep from '../components/ListaRep';
import {apiResponse} from '../__mocks__/RespuestaApi';

let listaReproduccion = apiResponse.items;
const setListaReproduccion = jest.fn();

test('<ListaRep/> se renderiza',() =>{
	render(
		<ThemeProvider theme={themeDark}>
			<ListaRep
         	listaReproduccion={listaReproduccion}
         	setListaReproduccion={setListaReproduccion}
			/>
		</ThemeProvider>
		)

	const titulo = screen.getByTestId('titulo-reproductor')
	expect(titulo).toHaveTextContent('Lista de Reproduccion');
	expect(titulo).toBeInTheDocument();
})

test('<ListaRep/> Muestra correctamente la cantidad de videos',async () => {
	render(
		<ThemeProvider theme={themeDark}>
			<ListaRep
         	listaReproduccion={listaReproduccion}
         	setListaReproduccion={setListaReproduccion}
			/>
		</ThemeProvider>
		)

	const videosLista = screen.getAllByTestId('video-lista');
	expect(videosLista.length).toBe(listaReproduccion.length);
})