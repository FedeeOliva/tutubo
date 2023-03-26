import fetchMock from "fetch-mock";
import { fetchVideos } from "../services/fetchVideos";
import { getEnviroments } from "../config/getEnviroments";

describe("fetchVideos", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test("Should return videos when the request is successful", async () => {
    const keyword = "test";
    const token = "";
    const response = {
      items: [
        {
          id: { videoId: "123" },
          snippet: {
            title: "Video title",
            thumbnails: {
              default: { url: "https://example.com/image.jpg" },
            },
          },
        },
      ],
      nextPageToken: "abc123",
    };
    fetchMock.getOnce(
      `https://www.googleapis.com/youtube/v3/search?key=${
        getEnviroments().VITE_API_KEY
      }&maxResults=12&type=video&part=snippet&q=${keyword}&pageToken=${token}`,
      {
        body: response,
        status: 200,
        headers: { "content-type": "application/json" },
      }
    );
    const result = await fetchVideos(keyword, token);
    expect(result).toEqual(response);
  });

  test("Should throw an error when the request fails", async () => {
    const keyword = "test";
    const token = "";
    fetchMock.getOnce(
      `https://www.googleapis.com/youtube/v3/search?key=${
        getEnviroments().VITE_API_KEY
      }&maxResults=12&type=video&part=snippet&q=${keyword}&pageToken=${token}`,
      () => Promise.reject(new Error("Hubo un error"))
    );
      try{
          await fetchVideos(keyword, token)
      }catch(e){
        expect(e.message).toBe('Hubo un error')
      }
  });
});
