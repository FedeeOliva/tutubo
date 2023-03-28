import { render, screen } from '@testing-library/react';
import { ThemeProvider } from "emotion-theming";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import {themeDark} from '../config/theme';
import ListaRep from '../components/ListaRep';
import {listaReproduccion} from '../__mocks__/constsMock'

describe('ListaRep Component', () => {
    const setMaximizar = jest.fn();
    const setListaReproduccion = jest.fn();
    const eliminarVideo = jest.fn();
    const reproducirVideo = jest.fn();

    beforeEach(async () => {
        render(
            <ThemeProvider theme={themeDark}>
                <ListaRep
                    setMaximizar={setMaximizar}
                    listaReproduccion={listaReproduccion}
                    setListaReproduccion={setListaReproduccion}
                    eliminarVideo={eliminarVideo}
                    reproducirVideo={reproducirVideo}
                    />
            </ThemeProvider>
        )
    })

    test('Should be displayed', () => {
        screen.getByText('Lista de Reproducción')
    })

    test('Should contain all the videos', () => {
        const videos = screen.getAllByTestId('video-lista')
        expect(videos).toHaveLength(4)
    })

    test('Should delete video', async () => {
        const btnBorraVideosEnLista =  screen.getAllByRole('button', {name:/eliminar video de la lista/i})
        await userEvent.click(btnBorraVideosEnLista[0])
        expect(eliminarVideo).toBeCalledTimes(1);    
    })

    test('Should play the video on click', async () => {
        const video = screen.getByAltText('Undefined Ft. Black Mamba')
        await userEvent.click(video)
        expect(reproducirVideo).toBeCalledTimes(1)
    })
})