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
    getCalendar() {
        return http.get(`/calendar`);
    }    
    createPin(data) {
        return http.post("/addPin", data);
      }
    
    updatePin(data) {
        return http.put("/editPin", data);
      }
}

export default new PinDataService();