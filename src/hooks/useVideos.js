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
		.catch( error => console.log('error'));
	// eslint-disable-next-line	
	},[keyword]);

	useEffect(()=>{
		if(page === 1 || !nextToken) return;
		console.log('effect page')
		setIsLoading(true);
		fetchVideos(keyword, nextToken)
		.then( res => {			
			setVideos(prevVideos => unrepeated(prevVideos, res.items));
			setToken(res.nextPageToken);
			setIsLoading(false);
		})
	// eslint-disable-next-line
	},[page]);


	return [videos, setPage , isLoading, nextToken,error];
}

export default useVideos;
//CBAQAA