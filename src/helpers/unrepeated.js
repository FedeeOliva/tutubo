export function unrepeated(prevVideos = [], newVideos = []){
    const unrepeteadVideos = prevVideos.map(el => el);

    newVideos.forEach(video =>{
        if(!unrepeteadVideos.find(v => v.id.videoId === video.id.videoId)){
            unrepeteadVideos.push(video);
        }
    })
    return unrepeteadVideos;
}
