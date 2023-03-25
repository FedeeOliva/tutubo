import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { themeDark } from "../config/theme";
import ListadoVideos from "../components/ListadoVideos";
import useVideos from "../hooks/useVideos";
import useObserver from "../hooks/useObserver";
import debounce from "just-debounce-it";

jest.mock("../hooks/useVideos", () => {
  return {
    __esModule: true,
    default: jest.fn(() => ({
      videos: [
        {
          id: { videoId: "123" },
          snippet: {
            title: "Title",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/hiY9i9wcQd0/default.jpg",
              },
              medium: {
                url: "https://i.ytimg.com/vi/hiY9i9wcQd0/default.jpg",
              },
            },
          },
        },
      ],
      getNextPage: jest.fn(),
      isLoading: false,
      thereIsNextPage: true,
      error: null,
    })),
  };
});

jest.mock("../hooks/useObserver", () => ({
  __esModule: true,
  default: jest.fn(() => [true, jest.fn()]),
}));

jest.mock("just-debounce-it", () => ({
  __esModule: true,
  default: jest.fn(() => jest.fn()),
}));

jest.useFakeTimers();

describe("ListadoVideos Component", () => {
  
  beforeEach(() => {
    useVideos.mockClear()
 render(
      <ThemeProvider theme={themeDark}>
        <ListadoVideos keyword={"test"} agregarALista={() => {}} />
      </ThemeProvider>
    );
  });

  test("Should render video", () => {
    const videoTitleElement = screen.getByAltText(/Title/i);
    expect(videoTitleElement).toBeInTheDocument();
    const videoThumbnailElement = screen.getByRole("img");
    expect(videoThumbnailElement).toBeInTheDocument();
    expect(videoThumbnailElement).toHaveAttribute(
      "src",
      "https://i.ytimg.com/vi/hiY9i9wcQd0/default.jpg"
    );
  });


  test("Should call debounceNextPage if isNearScreen is true", async () => {
    await waitFor(() => expect(debounce.mock.results[0].value).toHaveBeenCalled());
  });


  test("Should show the message error", () => {   
    useVideos.mockImplementationOnce( () => ({error: 'Hubo un error'}))

    render(
      <ThemeProvider theme={themeDark}>
        <ListadoVideos keyword={"test"} agregarALista={() => {}} />
      </ThemeProvider>
    );
 
    screen.getByText(/Hubo un error/i);
  })

  test("Should show the message when there aren't more videos to show", () => {   
    useVideos.mockImplementationOnce( () => ({isLoading: false, thereIsNextPage: false}))

    render(
      <ThemeProvider theme={themeDark}>
        <ListadoVideos keyword={"test"} agregarALista={() => {}} />
      </ThemeProvider>
    );
 
    screen.getByText(/Debe Realizar una busqueda para obtener mas resultados/i);
  })


  test("Should show spinner when is loading", () => {   
    useVideos.mockImplementationOnce( () => ({isLoading: true}))

    render(
      <ThemeProvider theme={themeDark}>
        <ListadoVideos keyword={"test"} agregarALista={() => {}} />
      </ThemeProvider>
    );
 
    screen.getByTestId('spinner');
  })

  


});
