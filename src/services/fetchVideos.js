const urlBase = `https://www.googleapis.com/youtube/v3/search?
key=${process.env.REACT_APP_APIKEY}&maxResults=12&type=video&part=snippet`
export const fetchVideos = async (keyword, token='') =>{
	try{
		const url = `${urlBase}&q=${keyword}&pageToken=${token}`;
		const respuesta =  await fetch(url);
		const resultado = await respuesta.json();
		return resultado;
	}catch(error){
		console.log(error);
		return [];
	}
}