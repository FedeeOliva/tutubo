import React, { useEffect, useCallback } from "react";
import { ContenedorVideos, SpinnerCentered, Info, Alert } from "./style";
import Video from "../Video";
import useVideos from "../../hooks/useVideos";
import useObserver from "../../hooks/useObserver";
import debounce from "just-debounce-it";
import Spinner from "../Spinner";

const ListadoVideos = ({ keyword, agregarALista }) => {
  const { videos, getNextPage, isLoading, thereIsNextPage, error } =
    useVideos(keyword);

  // eslint-disable-next-line
  const debounceNextPage = useCallback(
    debounce(() => {
      getNextPage();
    }, 1000),
    [getNextPage]
  );

  const [isNearScreen, visor] = useObserver({
    rootMargin: "100px",
  });

  useEffect(() => {
    if (isNearScreen) {
      debounceNextPage();
    }
  }, [debounceNextPage, isNearScreen]);

  return (
    <>
      <ContenedorVideos>
        {videos &&
          videos.map((video) => (
            <Video
              key={video.id.videoId}
              video={video}
              agregarALista={agregarALista}
            />
          ))}
        <Info>
          <div style={{ height: "10px", width: "100px" }} ref={visor} data-testid='visor'></div>
          {error && (
            <Alert role="alert">
              <span>
                Error: {error}
              </span>
            </Alert>
          )}
          {!thereIsNextPage && !isLoading && (
            <Alert role="alert">
              <span>
                Debe Realizar una busqueda para obtener mas resultados
              </span>
            </Alert>
          )}

          {isLoading && (
            <SpinnerCentered>
              <Spinner />
            </SpinnerCentered>
          )}
        </Info>
      </ContenedorVideos>
    </>
  );
};

export default ListadoVideos;
