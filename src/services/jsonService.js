import { api } from "./api"

export const getSlides = async () => {
    try{
        let response = await api.get('/slides');
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}

//service for get posters
export const getPosters = async () => {
    try{
        let response = await api.get('/posters');
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}