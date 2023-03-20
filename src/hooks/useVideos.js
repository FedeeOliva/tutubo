import {useState, useEffect} from 'react';
import {fetchVideos} from '../services/fetchVideos';
import {unrepeated} from '../helpers/unrepeated';

const useVideos = (keyword) => {
	const [videos, setVideos] = useState([]);
  	const [nextToken, setToken] = useState('');
  	const [page , setPage] = useState(1);
  	const [isLoading, setIsLoading] = useState(false);
  	const [error, setError] = useState(false);


	useEffect(()=>{
		setPage(1);
		setVideos([]);
		setIsLoading(true);
		fetchVideos(keyword)
		.then( res => {	
			if(res.error) setError(res.error.message); 
			setVideos(res.items);
			setToken(res.nextPageToken);
			setIsLoading(false);
			
		})
		.catch( error => setError(error));
	// eslint-disable-next-line	
	},[keyword]);

	useEffect(()=>{
		if(page === 1 || !nextToken) return;
		setIsLoading(true);
		fetchVideos(keyword, nextToken)
		.then( res => {			
			setVideos(prevVideos => unrepeated(prevVideos, res.items));
			setToken(res.nextPageToken);
			setIsLoading(false);
		})
		.catch(error => setError(error));
	// eslint-disable-next-line
	},[page]);

	const getNextPage = () => {
		setPage(prev => prev+1);
	}

	const thereIsNextPage = nextToken ? true : false;

	return {videos, isLoading, thereIsNextPage, error, getNextPage};
}

export default useVideos;
//CBAQAA