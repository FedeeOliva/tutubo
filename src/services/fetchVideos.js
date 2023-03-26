import { getEnviroments } from "../config/getEnviroments";

const urlBase = `https://www.googleapis.com/youtube/v3/search?
key=${getEnviroments().VITE_API_KEY}&maxResults=12&type=video&part=snippet`

export const fetchVideos = async (keyword, token='') =>{
		const url = `${urlBase}&q=${keyword}&pageToken=${token}`;
		const respuesta =  await fetch(url);
		const resultado = await respuesta.json();
		return resultado;	
}