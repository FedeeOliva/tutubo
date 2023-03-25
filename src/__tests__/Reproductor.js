import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { themeDark } from "../config/theme";
import Reproductor from "../components/Reproductor";
import '../__mocks__/matchMediaMock'

const video = {
    "kind": "youtube#searchResult",
    "etag": "HHhbr_H5qUnecQJb-KAul0iFGwc",
    "id": {
        "kind": "youtube#video",
        "videoId": "hiY9i9wcQd0"
    },
    "snippet": {
        "publishedAt": "2021-06-14T18:25:56Z",
        "channelId": "UCaGMd9NOwSWJhojxyGGsXWQ",
        "title": "Undefined Ft. Black Mamba",
        "description": "Lanzamiento Undefined Ft. Black Mamba Junio 2021. Los primeros con los primeros. Dirección @santichaher @felipe_escalada ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/hiY9i9wcQd0/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/hiY9i9wcQd0/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/hiY9i9wcQd0/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "Undefined",
        "liveBroadcastContent": "none",
        "publishTime": "2021-06-14T18:25:56Z"
    }
}

describe("Reproductor Component", () => {
  const siguienteVideo = jest.fn();
  const setListaReproduccion = jest.fn();
  const eliminarVideo = jest.fn();
  const reproducirVideo = jest.fn();

  beforeEach(() => {
    const reproductorData = {
        videoEnReproduccion: video,
        listaReproduccion: [],
        siguienteVideo,
        eliminarVideo,
        reproducirVideo,
        setListaReproduccion
    }

    render(
      <ThemeProvider theme={themeDark}>
        <Reproductor
          reproductorData={reproductorData}
        />
      </ThemeProvider>
    );
  });


  test('',() => {

  })
});
