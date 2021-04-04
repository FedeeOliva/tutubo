import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import VideoEnLista from '../components/VideoEnLista';
import { ThemeProvider } from 'emotion-theming';
import {themeDark} from '../config/theme';
import {apiResponse} from '../__mocks__/RespuestaApi';

const video = apiResponse.items[0];
const reproducirVideo = jest.fn();
const eliminarVideo = jest.fn();

test('<VideoEnLista/> El video se muestra en la lista', () => {
	render(
		<ThemeProvider theme={themeDark}>
			<VideoEnLista
				video = {video}
                eliminarVideo={eliminarVideo}
                reproducirVideo={reproducirVideo}
			/>
		</ThemeProvider>
		);

	const title = screen.getByText(/Feds Consider Sedition Charges/i)
	expect(title).toBeInTheDocument();
	expect(title).toHaveTextContent(video.snippet.title);

})

test('<VideoEnLista/> Las funciones se llaman correctamente', () => {
	render(
		<ThemeProvider theme={themeDark}>
			<VideoEnLista
				video = {video}
                eliminarVideo={eliminarVideo}
                reproducirVideo={reproducirVideo}
			/>
		</ThemeProvider>
		);

	const btnEliminar = screen.getByTestId('eliminar-video-lista');
	userEvent.click(btnEliminar);
	expect(eliminarVideo).toHaveBeenCalled();
	expect(eliminarVideo).toHaveBeenCalledTimes(1);
	expect(reproducirVideo).not.toHaveBeenCalled();

	const videoLista = screen.getByTestId('video-lista');
	userEvent.click(videoLista);
	expect(reproducirVideo).toHaveBeenCalled();
	expect(reproducirVideo).toHaveBeenCalledTimes(1);

})