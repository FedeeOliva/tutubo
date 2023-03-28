import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import VideoEnLista from "../components/VideoEnLista";
import { themeDark } from "../config/theme";

const video = {
  snippet: {
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/Q7MmVec4njA/mqdefault.jpg",
      },
    },
    title: "video title",
    channelTitle: "channel title",
    publishTime: "2022-03-23T01:00:09Z",
  },
};

describe("VideoEnLista Tests", () => {
  const reproducirVideo = jest.fn();
  const eliminarVideo = jest.fn();
  beforeEach(() => {
    render(
      <ThemeProvider theme={themeDark}>
        <VideoEnLista
          video={video}
          reproducirVideo={reproducirVideo}
          eliminarVideo={eliminarVideo}
        />
      </ThemeProvider>
    );
  });
  
  test("Should show the video information", () => {
    screen.getByAltText(video.snippet.title);
    screen.getByText(video.snippet.title);
    screen.getByText(video.snippet.channelTitle);
  });

  test("Should play the video",async () => {
    const card = screen.getByText(video.snippet.title).parentNode;
    await userEvent.click(card);
    expect(reproducirVideo).toBeCalled()
  });

  test("Should remove the video", async () => {
    screen.debug()
    const btnDelete = screen.getByRole('button', {name: /eliminar video de la lista/i})
    await userEvent.click(btnDelete)
    expect(eliminarVideo).toBeCalled()
    screen.debug()
  });

  
});
