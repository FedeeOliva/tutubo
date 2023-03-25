import { render, screen, } from '@testing-library/react';
import { ThemeProvider } from "emotion-theming";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import {themeDark} from '../config/theme';
import ListaRep from '../components/ListaRep';

const listaReproduccion = [
    {
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
    },
    {
        "kind": "youtube#searchResult",
        "etag": "nd874M95spipat9iuxEyzASk7U4",
        "id": {
            "kind": "youtube#video",
            "videoId": "7rw9wIRKnhw"
        },
        "snippet": {
            "publishedAt": "2023-02-24T14:00:51Z",
            "channelId": "UCRehQoB8xNozXLsfzFtDY4w",
            "title": "undefined #Shorts",
            "description": "undefined #shorts . . . . . . . ---------- Please be advised that this page's videos are intended for entertainment purposes only.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7rw9wIRKnhw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7rw9wIRKnhw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7rw9wIRKnhw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "PaulVuTV",
            "liveBroadcastContent": "none",
            "publishTime": "2023-02-24T14:00:51Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "PKRAh_6OaYGF8RQN1oQxMzYeQ28",
        "id": {
            "kind": "youtube#video",
            "videoId": "zrJAYYCjpHg"
        },
        "snippet": {
            "publishedAt": "2022-09-04T23:00:10Z",
            "channelId": "UCaGMd9NOwSWJhojxyGGsXWQ",
            "title": "@Undefined_ba  - H8ERS Club (Official Video)",
            "description": "Jealousy is just love and hate at the same time. https://www.instagram.com/undefined_ba/ https://www.instagram.com/h8ers.club/ ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zrJAYYCjpHg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zrJAYYCjpHg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zrJAYYCjpHg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Undefined",
            "liveBroadcastContent": "none",
            "publishTime": "2022-09-04T23:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "oxsndRfrZWGdjOLSiDkyXEK8zqs",
        "id": {
            "kind": "youtube#video",
            "videoId": "IQTQhhDiWLE"
        },
        "snippet": {
            "publishedAt": "2022-12-07T14:30:04Z",
            "channelId": "UCzR2u5RWXWjUh7CwLSvbitA",
            "title": "Uncaught TypeError: Cannot read properties of undefined | RESOLVIDO!",
            "description": "Vamo explorar um erro do JavaScript juntos? Link importantes para VOCÊ! (e pra me ajudar a continuar trazendo conteúdo!)",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IQTQhhDiWLE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IQTQhhDiWLE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IQTQhhDiWLE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Mario Souto - Dev Soutinho",
            "liveBroadcastContent": "none",
            "publishTime": "2022-12-07T14:30:04Z"
        }
    }
]

describe('ListaRep Component', () => {
    const setMaximizar = jest.fn();
    const setListaReproduccion = jest.fn();
    const eliminarVideo = jest.fn();
    const reproducirVideo = jest.fn();

    beforeEach(() => {
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