import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";;
import "@testing-library/jest-dom/extend-expect";
import { themeDark } from "../config/theme";
import Reproductor from "../components/Reproductor";
import '../__mocks__/matchMediaMock'
import { listaReproduccion } from '../__mocks__/constsMock'


describe("Reproductor Component", () => {
  const siguienteVideo = jest.fn();
  const setListaReproduccion = jest.fn();
  const eliminarVideo = jest.fn();
  const reproducirVideo = jest.fn();

  const reproductorData = {
    videoEnReproduccion: listaReproduccion[0],
    listaReproduccion,
    siguienteVideo,
    eliminarVideo,
    reproducirVideo,
    setListaReproduccion
}

  beforeEach(() => {
    
    render(
      <ThemeProvider theme={themeDark}>
        <Reproductor
          reproductorData={reproductorData}
        />
      </ThemeProvider>
    );
  });

  test('Se muestra correctamente los indices del reproductor',() => {
      const cantidadVideoLista = listaReproduccion.length
      const text = `Reproduciendo 1/${cantidadVideoLista}...`
      screen.getByText(text)
  })
});
