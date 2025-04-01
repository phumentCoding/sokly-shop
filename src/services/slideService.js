import { api } from "./api"


export const getSlides = async () => {
    try{
        let response = await api.get('/slide');
        return response.data.slides;

    }catch(error){
        console.error(error);
    }
}