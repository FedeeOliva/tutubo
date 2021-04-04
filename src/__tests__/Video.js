import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Video from '../components/Video';
import { ThemeProvider } from 'emotion-theming';
import {themeDark} from '../config/theme';

const video = {
	snippet: {
		title: 'titulo video',
		channelTitle: 'titulo canal',
		thumbnails: {
			medium:{
				url: ''
			}
		}
	}
}

const agregarALista = jest.fn();

test('<Video/> Se renderiza y llama la funcion al hacer click', () =>{
	const wrapper = render(
		<ThemeProvider theme={themeDark}>
			<Video
			video={video}
			agregarALista={agregarALista}
			/>			
		</ThemeProvider>
	);
	const videoCard = screen.getByTestId('video-card');
	expect(videoCard).toBeInTheDocument();

	expect(screen.getByRole('heading')).toHaveTextContent(video.snippet.title)

	userEvent.click(videoCard);
	expect(agregarALista).toHaveBeenCalled();
	expect(agregarALista).toHaveBeenCalledTimes(1);

})