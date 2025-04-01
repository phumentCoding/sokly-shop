import { api } from "./api"

export const getSlides = async () => {
    try{
        let response = await api.get('/slides');
        console.log(response);
        return response.data;
    }catch(error){
        console.error(error);
    }
}