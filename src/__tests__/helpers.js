import {unrepeated} from '../helpers/unrepeated';

describe('unrepetead function helper', () => {
    const video1 = { id: {videoId: 1}}
    const video2 = { id: {videoId: 2}}
    const video3 = { id: {videoId: 3}}
    const arr1 = [video1, video2]
    const arr2 = [video1, video3]

    test('Shouln\'t have repeated videos',()=>{
        expect( unrepeated(arr1, arr2) ).toHaveLength(3);
    })
})