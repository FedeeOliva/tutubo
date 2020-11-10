export function unrepeated(arrayUnicos, array){
    const newArray = arrayUnicos.map(el => el);

    array.forEach(el =>{
        if(!newArray.find(elem => elem.id.videoId === el.id.videoId)){
            newArray.push(el);
        }
    })
    return newArray;
}
