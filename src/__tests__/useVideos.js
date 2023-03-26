import {renderHook, waitFor} from '@testing-library/react'
import useVideos from '../hooks/useVideos';
import { fetchVideos } from "../services/fetchVideos";
import { act } from 'react-dom/test-utils';

jest.mock("../services/fetchVideos");

const mockVideos = [
    { id: {videoId: 1} },
    { id: {videoId: 2} },
  ];

const mockVideos2 = [
    { id: {videoId: 3} },
    { id: {videoId: 4} },
  ];
  


describe('useVideos test', () => {

    afterEach(() => {
        fetchVideos.mockClear();
    })

    test('Should have correct initial state', () => {
        const {result} = renderHook(() => useVideos())
        expect(result.current.videos).toHaveLength(0)   
        expect(result.current.isLoading).toBeTruthy()
        expect(result.current.error).toBeFalsy()
        expect(result.current.thereIsNextPage).toBeFalsy()       
    }); 
    
    test('Should get videos on mount', async () => {       
        fetchVideos.mockResolvedValue({items: mockVideos, nextPageToken: '123'})
        
        const {result} = renderHook(() => useVideos('test'))    
        
        await waitFor( () => expect(fetchVideos).toHaveBeenCalledTimes(1))
       
        expect(fetchVideos).toHaveBeenCalledWith("test");
    
        const { videos, isLoading, error, thereIsNextPage } = result.current;
        expect(videos).toEqual(mockVideos);
        expect(thereIsNextPage).toBeTruthy();
        expect(isLoading).toBe(false);
        expect(error).toBe(false);
    }); 
    
    test('Shouldn\'t get videos if keyword is undefined', async () => {
        
        fetchVideos.mockResolvedValue()
        
        renderHook(() => useVideos())    
        
        await waitFor( () => expect(fetchVideos).toHaveBeenCalledTimes(0))
       
    }); 

    test('Should get more videos when getNextPage is called', async () => {
        fetchVideos.mockResolvedValueOnce({items: mockVideos, nextPageToken: '123'})
            .mockResolvedValueOnce({items: mockVideos2, nextPageToken: '321'})

        const {result} =  renderHook(() => useVideos('test')) 
        await waitFor( () => expect(fetchVideos).toHaveBeenCalledTimes(1))
        expect(result.current.thereIsNextPage).toBeTruthy();
        act(() => {
            result.current.getNextPage()
        })
        expect(fetchVideos).toBeCalledWith('test', '123')
        await waitFor(() => expect(fetchVideos).toHaveBeenCalledTimes(2))
        expect(result.current.videos).toHaveLength(4)        
    })


    test('Shouldn\'t add repetead videos when getNextPage is called', async () => {
        const mockVideosRepetidos = [
            { id: {videoId: 2 } } ,
            { id: {videoId: 3} },
          ];

        fetchVideos.mockResolvedValueOnce({items: mockVideos, nextPageToken: '123'})
            .mockResolvedValueOnce({items: mockVideosRepetidos, nextPageToken: '321'})

        const {result} =  renderHook(() => useVideos('test')) 
        await waitFor( () => expect(fetchVideos).toHaveBeenCalledTimes(1))
        act(() => {
            result.current.getNextPage()
        })
        await waitFor(() => expect(fetchVideos).toHaveBeenCalledTimes(2))
        expect(result.current.videos).toHaveLength(3)        
    })


    test('Should set error and clean videos when new search fail', async () => {
        fetchVideos.mockRejectedValue(new Error('Error new search'))
        const {result} =  renderHook(() => useVideos('test')) 
        await waitFor( () => expect(fetchVideos).toHaveBeenCalledTimes(1))
        expect(result.current.error).toBe('Error new search')
        expect(result.current.videos).toHaveLength(0)
    })

    test('Should set error when getNextPage fail', async () => {
        fetchVideos
            .mockResolvedValueOnce({items: mockVideos, nextPageToken: '123'})
            .mockRejectedValueOnce(new Error('Error get next page'))
        const {result} =  renderHook(() => useVideos('test')) 
        await waitFor( () => expect(fetchVideos).toHaveBeenCalledTimes(1))       
        act(() => {
            result.current.getNextPage()
        })
        await waitFor(() => expect(fetchVideos).toHaveBeenCalledTimes(2))
        expect(result.current.videos).toHaveLength(2)   
        expect(result.current.error).toBe('Error get next page')
    })

    test('Shouldn\'t execute fetch again when getNextPage is called if there is not next token', async () => {
        fetchVideos
            .mockResolvedValueOnce({items: mockVideos})
        const {result} =  renderHook(() => useVideos('test')) 
        await waitFor( () => expect(fetchVideos).toHaveBeenCalledTimes(1))
        expect(result.current.thereIsNextPage).toBeFalsy()       
        act(() => {
            result.current.getNextPage()
        })
        await waitFor(() => expect(fetchVideos).toHaveBeenCalledTimes(1))
    })


})

