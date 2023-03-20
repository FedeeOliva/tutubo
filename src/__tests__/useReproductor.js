import { renderHook, act} from '@testing-library/react';
import useReproductor from "../hooks/useReproductor";

const VIDEO1 = {id: {videoId: "123"}}
const VIDEO2 = {id: {videoId: "234"}}
const VIDEO3 = {id: {videoId: "345"}}

test('Should have correct initial state', () => {
    const {result} = renderHook(() => useReproductor())
    expect(result.current.videoEnReproduccion).toBeFalsy();
    expect(result.current.listaReproduccion.length).toBe(0)
}); 

test('Should add video to the list', () => {
  const {result} = renderHook(() => useReproductor())
  act(() => {
    result.current.agregarALista(VIDEO1);
  });
  expect(result.current.listaReproduccion.length).toBe(1)
  expect(result.current.listaReproduccion[0]).toEqual(VIDEO1);
})

test('Should play when the first video is added', () => {
  const {result} = renderHook(() => useReproductor())
  act(() => {
    result.current.agregarALista(VIDEO1);
  });
  expect(result.current.videoEnReproduccion).toEqual(VIDEO1);
})

test('Shouldn\'t add repeated video to the list', () => {
  const {result} = renderHook(() => useReproductor())
  act(() => {
    result.current.agregarALista(VIDEO1);
  });
  act(() => {
    result.current.agregarALista(VIDEO1);
  });
  expect(result.current.listaReproduccion.length).toBe(1)
})

test('Should play next video', () => {
  const {result} = renderHook(() => useReproductor())
  act(() => {
    result.current.agregarALista(VIDEO1);    
  });
  act(() => {
    result.current.agregarALista(VIDEO2);
  })
  act(() => {
    result.current.siguienteVideo()
  });
  expect(result.current.videoEnReproduccion).toEqual(VIDEO2);
})

test('Should play the video', () => {
  const {result} = renderHook(() => useReproductor())
  act(() => {
    result.current.agregarALista(VIDEO1);    
  });
  act(() => {
    result.current.agregarALista(VIDEO2);
  })
  act(() => {
    result.current.agregarALista(VIDEO3);
  })
  act(() => {
    result.current.reproducirVideo(VIDEO3)
  });
  expect(result.current.videoEnReproduccion).toEqual(VIDEO3);
})

test('Should delete the video from the list', () => {
  const {result} = renderHook(() => useReproductor())
  act(() => {
    result.current.agregarALista(VIDEO1);    
  });
  act(() => {
    result.current.agregarALista(VIDEO2);
  })
  act(() => {
    result.current.eliminarVideo(VIDEO2)
  });
  expect(result.current.listaReproduccion).not.toContain(VIDEO2);
})

test('Should play the next video if the current video is removed', () => {
  const {result} = renderHook(() => useReproductor())
  act(() => {
    result.current.agregarALista(VIDEO1);    
  });
  act(() => {
    result.current.agregarALista(VIDEO2);
  })
  act(() => {
    result.current.eliminarVideo(VIDEO1)
  });
  expect(result.current.videoEnReproduccion).toEqual(VIDEO2);
})