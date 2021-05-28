import http from "../services/http-common";

class PinDataService {
    getAll(page) {
        return http.get(`/allPins?page=${page}`);
    }
    get(number) {
        return http.get(`/pinDetail?number=${number}`);
    } 
    find(by, query) {
        return http.get(`/pins?${by}=${query}`);
    }    
}

export default new PinDataService();