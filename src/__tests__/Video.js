import { render, screen, act, waitFor } from "@testing-library/react";
import Video from "../components/Video";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "emotion-theming";
import { themeDark } from "../config/theme";
import userEvent from "@testing-library/user-event";

const video = {
  snippet: {
    thumbnails: {
      medium: {
        url: "https://i.ytimg.com/vi/Q7MmVec4njA/mqdefault.jpg",
      },
    },
    title: "video title",
    channelTitle: "channel title",
    publishTime: "2022-03-23T01:00:09Z",
  },
};

test("Should show the data properly", () => {
  render(
    <ThemeProvider theme={themeDark}>
      <Video video={video} agregarALista={() => {}} />
    </ThemeProvider>
  );

  screen.getByText("video title");
  screen.getByText("channel title");
  screen.getByText("a year ago");
  screen.getByAltText("video title");
});

test("Should execute agregarALista when it is clicked", async () => {
  const agregarALista = jest.fn();
  render(
    <ThemeProvider theme={themeDark}>
      <Video video={video} agregarALista={agregarALista} />
    </ThemeProvider>
  );

  const card = screen.getByAltText("video title");
  await userEvent.click(card);

  expect(agregarALista).toBeCalled();
  expect(agregarALista.mock.calls[0][0]).toEqual(video);
});
