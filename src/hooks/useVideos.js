import {useState, useEffect} from 'react';
import {fetchVideos} from '../services/fetchVideos';
import {unrepeated} from '../helpers/unrepeated';

const useVideos = (keyword) => {
	const [videos, setVideos] = useState([]);
  	const [nextToken, setToken] = useState('');
  	const [page , nextPage] = useState(1);	

	useEffect(()=>{
		nextPage(1);
		setVideos([]);
		fetchVideos(keyword)
		.then( res => {	
			setVideos(res.items);
			setToken(res.nextPageToken);			
		})
	// eslint-disable-next-line	
	},[keyword]);

	useEffect(()=>{
		if(page === 1) return;
		fetchVideos(keyword, nextToken)
		.then( res => {			
			setVideos(prevVideos => unrepeated(prevVideos, res.items));
			setToken(res.nextPageToken);
		})
	// eslint-disable-next-line
	},[page]);

	return [videos,nextPage];

}

export default useVideos;
//CBAQAA